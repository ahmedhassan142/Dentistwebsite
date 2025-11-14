// app/api/appointments/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Appointment from '@/app/lib/models/Appointment';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const appointment = await Appointment.create(body);
    
    return NextResponse.json(
      { success: true, data: appointment },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create appointment' },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: appointments });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch appointments' },
      { status: 400 }
    );
  }
}