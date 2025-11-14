// lib/models/BlogPost.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  published: boolean;
  publishedAt: Date;
  tags: string[];
  metaDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'],
    trim: true
  },
  slug: { 
    type: String, 
    required: [true, 'Slug is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  excerpt: { 
    type: String, 
    required: [true, 'Excerpt is required'],
    maxlength: [200, 'Excerpt cannot exceed 200 characters']
  },
  content: { 
    type: String, 
    required: [true, 'Content is required'] 
  },
  category: { 
    type: String, 
    required: [true, 'Category is required'],
    enum: [
      'Dental Health',
      'Cosmetic Dentistry',
      'Preventive Care',
      'Restorative Dentistry',
      'General Dentistry',
      'Orthodontics',
      'Pediatric Dentistry',
      'Technology'
    ]
  },
  author: { 
    type: String, 
    required: [true, 'Author is required'],
    default: 'Elite Dental Team'
  },
  readTime: { 
    type: String, 
    required: [true, 'Read time is required'] 
  },
  image: { 
    type: String, 
    required: [true, 'Image is required'] 
  },
  published: { 
    type: Boolean, 
    default: false 
  },
  publishedAt: { 
    type: Date 
  },
  tags: [{ 
    type: String 
  }],
  metaDescription: { 
    type: String,
    maxlength: [160, 'Meta description cannot exceed 160 characters']
  }
}, {
  timestamps: true
});

// Index for better query performance
BlogPostSchema.index({ published: 1, publishedAt: -1 });
BlogPostSchema.index({ category: 1, published: 1 });
BlogPostSchema.index({ slug: 1 });

export default mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);