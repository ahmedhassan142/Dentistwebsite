// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Contact from '@/app/lib/models/Contact';

export async function POST(request: NextRequest) {
  console.log('📞 Contact API called at:', new Date().toISOString());
  
  try {
    console.log('🔗 Connecting to MongoDB...');
    await dbConnect();
    console.log('✅ MongoDB connected');
    
    const body = await request.json();
    console.log('📝 Received form data:', body);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !body[field] || body[field].trim() === '');
    
    console.log('🔍 Missing fields check:', missingFields);
    
    if (missingFields.length > 0) {
      console.log('❌ Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}`,
          missingFields: missingFields 
        },
        { status: 400 }
      );
    }
    
    // Additional validation
    if (body.message.trim().length < 10) {
      console.log('❌ Message too short:', body.message.length);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Message must be at least 10 characters long'
        },
        { status: 400 }
      );
    }
    
    console.log('💾 Creating contact record...');
    
    const contact = await Contact.create({
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      subject: body.subject,
      message: body.message.trim(),
      createdAt: new Date()
    });
    
    console.log('✅ Contact created successfully:', contact._id);
    
    return NextResponse.json(
      { 
        success: true, 
        data: contact,
        message: 'Contact message submitted successfully'
      },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('❌ Error creating contact:', error);
    
    // Mongoose validation error
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      console.log('❌ Validation errors:', errors);
      return NextResponse.json(
        { 
          success: false, 
          error: `Validation failed: ${errors.join(', ')}`,
          details: error.errors 
        },
        { status: 400 }
      );
    }
    
    // MongoDB duplicate key error
    if (error.code === 11000) {
      console.log('❌ Duplicate entry detected');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Duplicate entry detected. This contact already exists.'
        },
        { status: 409 }
      );
    }
    
    // Generic error
    return NextResponse.json(
      { 
        success: false, 
        error: `Failed to submit contact form: ${error.message}`,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: GET route to verify API is working
export async function GET() {
  try {
    console.log('🧪 Contact API GET called - testing connection');
    
    await dbConnect();
    console.log('✅ Database connected');
    
    // Count total contacts for debugging
    const totalContacts = await Contact.countDocuments({});
    console.log(`📊 Total contacts in database: ${totalContacts}`);
    
    // Get recent contacts
    const recentContacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email subject createdAt')
      .lean();
    
    return NextResponse.json({
      success: true,
      message: 'Contact API is working',
      data: {
        totalContacts,
        recentContacts,
        status: 'operational',
        timestamp: new Date().toISOString()
      }
    });
  } catch (error: any) {
    console.error('❌ Contact API test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Contact API test failed',
      details: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}