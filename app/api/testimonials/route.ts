// app/api/testimonials/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Testimonial from '@/app/lib/models/Testimonial';

// GET all approved testimonials
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const treatment = searchParams.get('treatment');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    let query: any = { approved: true };
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    if (treatment) {
      query.treatment = treatment;
    }
    
    const testimonials = await Testimonial.find(query)
      .sort({ featured: -1, createdAt: -1 })
      .limit(limit)
      .select('patientName patientAge treatment rating content image featured createdAt');
    
    return NextResponse.json({ 
      success: true, 
      data: testimonials,
      count: testimonials.length
    });
    
  } catch (error) {
    console.error('Testimonials fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

// POST new testimonial
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    // Validation
    if (!body.patientName || !body.patientEmail || !body.treatment || !body.rating || !body.content) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    if (body.rating < 1 || body.rating > 5) {
      return NextResponse.json(
        { success: false, error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    const testimonial = await Testimonial.create({
      ...body,
      approved: false, // Admin must approve testimonials
      featured: false
    });
    
    return NextResponse.json(
      { 
        success: true, 
        data: testimonial,
        message: 'Testimonial submitted successfully. It will be visible after approval.' 
      },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('Testimonial creation error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { success: false, error: errors.join(', ') },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}