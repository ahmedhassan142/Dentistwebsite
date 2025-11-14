// app/testimonials/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  _id: string;
  patientName: string;
  patientAge?: number;
  treatment: string;
  rating: number;
  content: string;
  image?: string;
  featured: boolean;
  createdAt: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([]);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (selectedTreatment === 'all') {
      setFilteredTestimonials(testimonials);
    } else {
      setFilteredTestimonials(
        testimonials.filter(t => t.treatment === selectedTreatment)
      );
    }
  }, [selectedTreatment, testimonials]);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials?limit=50');
      const result = await response.json();
      
      if (result.success) {
        setTestimonials(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const treatments = [
    'all',
    'Teeth Cleaning',
    'Dental Implants',
    'Teeth Whitening',
    'Orthodontics',
    'Root Canal',
    'Cosmetic Dentistry',
    'Emergency Care',
    'Pediatric Dentistry'
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Patient Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Read what our patients have to say about their experiences at Elite Dental Care.
          </p>
        </div>

        {/* Filter & Add Testimonial */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {treatments.map((treatment) => (
              <button
                key={treatment}
                onClick={() => setSelectedTreatment(treatment)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTreatment === treatment
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {treatment === 'all' ? 'All Treatments' : treatment}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Share Your Experience
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No testimonials found for the selected treatment.</p>
          </div>
        )}

        {/* Add Testimonial Form Modal */}
        {showForm && (
          <AddTestimonialForm 
            onClose={() => setShowForm(false)}
            onSuccess={() => {
              setShowForm(false);
              fetchTestimonials();
            }}
          />
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Elite Dental Care?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join our family of satisfied patients and discover the difference quality dental care can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Book Your Appointment
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 ${
      testimonial.featured ? 'ring-2 ring-blue-500' : ''
    }`}>
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`text-lg ${
              i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
      
      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.content}"
      </p>
      
      {/* Treatment & Featured Badge */}
      <div className="flex justify-between items-center mb-4">
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          {testimonial.treatment}
        </span>
        {testimonial.featured && (
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
            Featured
          </span>
        )}
      </div>
      
      {/* Author */}
      <div className="border-t border-gray-100 pt-4">
        <div className="font-semibold text-gray-900">{testimonial.patientName}</div>
        <div className="text-gray-500 text-sm">
          {testimonial.patientAge && `${testimonial.patientAge} years • `}
          {new Date(testimonial.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
}

// Add Testimonial Form Component
function AddTestimonialForm({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientAge: '',
    treatment: '',
    rating: 0,
    content: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          patientAge: formData.patientAge ? parseInt(formData.patientAge) : undefined,
          rating: parseInt(formData.rating.toString())
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Thank you for sharing your experience! Your testimonial will be visible after approval.');
        setFormData({
          patientName: '',
          patientEmail: '',
          patientAge: '',
          treatment: '',
          rating: 0,
          content: ''
        });
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setMessage(result.error || 'Failed to submit testimonial. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {message && (
            <div className={`p-4 rounded-lg mb-6 ${
              message.includes('Thank you') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="patientName"
                  required
                  value={formData.patientName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="patientEmail"
                  required
                  value={formData.patientEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age (Optional)
                </label>
                <input
                  type="number"
                  name="patientAge"
                  min="1"
                  max="120"
                  value={formData.patientAge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Treatment Received *
                </label>
                <select
                  name="treatment"
                  required
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select treatment</option>
                  <option value="Teeth Cleaning">Teeth Cleaning</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Root Canal">Root Canal</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Emergency Care">Emergency Care</option>
                  <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating *
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className="text-2xl focus:outline-none"
                  >
                    <span className={star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Experience *
              </label>
              <textarea
                name="content"
                rows={6}
                required
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Tell us about your experience with our dental practice..."
                minLength={10}
                maxLength={1000}
              />
              <div className="text-sm text-gray-500 mt-1">
                {formData.content.length}/1000 characters
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Testimonial'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}