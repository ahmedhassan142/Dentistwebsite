// app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import BlogPost from '@/app/lib/models/Blogpost';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    
    let query: any = { published: true };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    const posts = await BlogPost.find(query)
      .sort({ publishedAt: -1 })
      .limit(limit)
      .select('title excerpt category readTime publishedAt slug image');
    
    return NextResponse.json({ 
      success: true, 
      data: posts,
      count: posts.length
    });
    
  } catch (error) {
    console.error('Blog posts fetch error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch blog posts',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    // Validation
    if (!body.title || !body.content || !body.category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: title, content, and category are required' },
        { status: 400 }
      );
    }
    
    // Generate slug from title if not provided
    const slug = body.slug || body.title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    
    const blogPost = await BlogPost.create({
      ...body,
      slug,
      publishedAt: body.published ? new Date() : null
    });
    
    return NextResponse.json(
      { 
        success: true, 
        data: blogPost,
        message: 'Blog post created successfully'
      },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('Blog post creation error:', error);
    
    // Handle duplicate slug error
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'A blog post with this slug already exists' },
        { status: 400 }
      );
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { success: false, error: errors.join(', ') },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create blog post',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}