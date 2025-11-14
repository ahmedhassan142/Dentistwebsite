// app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import BlogPost from '@/lib/models/BlogPost';

export async function GET() {
  try {
    await dbConnect();
    const posts = await BlogPost.find({ published: true })
      .sort({ publishedAt: -1 })
      .select('title excerpt category readTime publishedAt slug');
    
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog posts' },
      { status: 400 }
    );
  }
}