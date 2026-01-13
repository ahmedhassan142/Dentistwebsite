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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors in the form');
      setIsSuccess(false);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    setErrors({});
    
    try {
      console.log('Submitting contact form:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject,
          message: formData.message.trim()
        }),
      });
      
      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      if (response.ok && data.success) {
        setIsSuccess(true);
        setSubmitMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setIsSuccess(false);
        setSubmitMessage(data.error || `Failed to send message. Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setIsSuccess(false);
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
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
        {submitMessage && (
          <div className={`mb-8 p-4 rounded-lg ${
            isSuccess 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitMessage}
          </div>
        )}
        
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50 disabled:opacity-50`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50 disabled:opacity-50`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50 disabled:opacity-50`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border ${
                      errors.subject ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50 disabled:opacity-50`}
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="emergency">Dental Emergency</option>
                    <option value="general">General Question</option>
                    <option value="insurance">Insurance Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border ${
                    errors.message ? 'border-red-300' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/50 disabled:opacity-50`}
                  placeholder="Please describe your inquiry in detail..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
                <div className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/1000 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {/* Debug button */}
              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={async () => {
                    console.log('Testing contact API...');
                    const response = await fetch('/api/contact', {
                      method: 'GET',
                    });
                    const data = await response.json();
                    console.log('Contact API test:', data);
                    alert(JSON.stringify(data, null, 2));
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Test API Connection
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}