// app/api/testimonials/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Testimonial from '@/app/lib/models/Testimonial';

// GET all approved testimonials
// app/api/testimonials/route.ts - Updated GET function
// GET all approved testimonials
export async function GET(request: NextRequest) {
  try {
    console.log('Testimonials GET request received');
    
    // Connect to database
    console.log('Connecting to MongoDB...');
    await dbConnect();
    console.log('MongoDB connected successfully');
    
    const { searchParams } = new URL(request.url);
    console.log('Search params:', Object.fromEntries(searchParams.entries()));
    
    const featured = searchParams.get('featured');
    const treatment = searchParams.get('treatment');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    console.log('Query params - featured:', featured, 'treatment:', treatment, 'limit:', limit);
    
    // Build query
    let query: any = { approved: true };
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    if (treatment) {
      query.treatment = treatment;
    }
    
    console.log('Final query:', query);
    
    // Fetch testimonials
    const testimonials = await Testimonial.find(query)
      .sort({ featured: -1, createdAt: -1 })
      .limit(limit)
      .select('patientName patientAge treatment rating content image featured createdAt')
      .lean(); // Convert to plain JavaScript objects
    
    console.log(`Found ${testimonials.length} testimonials`);
    
    // If no approved testimonials found, return an empty array
    if (testimonials.length === 0) {
      console.log('No approved testimonials found');
      return NextResponse.json({ 
        success: true, 
        data: [],
        count: 0,
        message: 'No testimonials found. They may need approval first.'
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      data: testimonials,
      count: testimonials.length
    });
    
  } catch (error: any) {
    console.error('Testimonials fetch error details:', error);
    
    // Check if it's a MongoDB connection error
    if (error.name === 'MongoNetworkError' || error.message?.includes('connect')) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed. Please check MongoDB connection.',
          details: error.message 
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch testimonials',
        details: error.message 
      },
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