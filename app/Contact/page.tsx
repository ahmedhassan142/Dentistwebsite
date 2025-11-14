// app/contact/page.tsx
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Clinic',
      details: ['123 Dental Avenue', 'Medical District, CA 90210'],
      description: 'Free parking available in front of the building'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['(555) 123-4567', '(555) 123-4568 Emergency'],
      description: '24/7 emergency dental services available'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@elitedental.com', 'appointments@elitedental.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: '🕒',
      title: 'Office Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 3:00 PM'],
      description: 'Closed on Sundays and major holidays'
    }
  ];

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url("/images/contact-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header */}
      <div 
        className="text-white py-20 relative"
        style={{
          backgroundImage: 'url("/images/contact-hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-teal-500/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to answer your questions and schedule your appointment. Contact us today!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700 mb-1">{detail}</p>
                      ))}
                      <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Our Location</h3>
              <div 
                className="bg-gray-200 h-64 rounded-lg flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: 'url("/images/map-placeholder.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-blue-600/20"></div>
                <p className="text-gray-600 relative z-10 bg-white/90 px-4 py-2 rounded-lg">Interactive Map Here</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="emergency">Dental Emergency</option>
                    <option value="general">General Question</option>
                    <option value="insurance">Insurance Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}