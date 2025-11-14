// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Contact from '@/app/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const contact = await Contact.create(body);
    
    return NextResponse.json(
      { success: true, data: contact },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 400 }
    );
  }
}