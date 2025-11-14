// lib/models/Service.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  priceRange: string;
  duration: string;
  features: string[];
}

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  detailedDescription: { type: String, required: true },
  icon: { type: String, required: true },
  priceRange: { type: String, required: true },
  duration: { type: String, required: true },
  features: { type: [String], default: [] }
});

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);