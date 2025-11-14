// lib/models/Testimonial.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface ITestimonial extends Document {
  patientName: string;
  patientEmail: string;
  patientAge?: number;
  treatment: string;
  rating: number;
  content: string;
  image?: string;
  approved: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema({
  patientName: { 
    type: String, 
    required: [true, 'Patient name is required'],
    trim: true
  },
  patientEmail: { 
    type: String, 
    required: [true, 'Patient email is required'],
    trim: true,
    lowercase: true
  },
  patientAge: { 
    type: Number, 
    min: 1,
    max: 120
  },
  treatment: { 
    type: String, 
    required: [true, 'Treatment type is required'],
    enum: [
      'Teeth Cleaning',
      'Dental Implants',
      'Teeth Whitening',
      'Orthodontics',
      'Root Canal',
      'Cosmetic Dentistry',
      'Emergency Care',
      'Pediatric Dentistry',
      'Periodontal Treatment',
      'General Checkup'
    ]
  },
  rating: { 
    type: Number, 
    required: [true, 'Rating is required'],
    min: 1,
    max: 5
  },
  content: { 
    type: String, 
    required: [true, 'Testimonial content is required'],
    minlength: [10, 'Testimonial must be at least 10 characters long'],
    maxlength: [1000, 'Testimonial cannot exceed 1000 characters']
  },
  image: { 
    type: String 
  },
  approved: { 
    type: Boolean, 
    default: false 
  },
  featured: { 
    type: Boolean, 
    default: false 
  }
}, {
  timestamps: true
});

// Index for better query performance
TestimonialSchema.index({ approved: 1, featured: -1, createdAt: -1 });
TestimonialSchema.index({ treatment: 1, approved: 1 });

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);