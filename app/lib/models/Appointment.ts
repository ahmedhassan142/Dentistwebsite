// lib/models/Appointment.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  appointmentDate: Date;
  serviceType: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

const AppointmentSchema = new Schema({
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  patientPhone: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  serviceType: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);