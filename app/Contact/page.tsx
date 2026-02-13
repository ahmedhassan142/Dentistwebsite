'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DentalClinicMap = dynamic(() => import('../components/Mapcomponent'), {
  ssr: false,
  loading: () => (
    <div className="bg-gradient-to-r from-blue-100 to-teal-100 h-64 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-blue-700 font-medium">Loading interactive map...</p>
      </div>
    </div>
  )
});

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

  const clinicPosition: [number, number] = [34.0522, -118.2437];
  const clinicInfo = {
    name: "Elite Dental Clinic",
    address: "123 Dental Avenue, Medical District, CA 90210",
    phone: "(555) 123-4567",
    emergencyPhone: "(555) 123-4568",
    email: "info@elitedental.com",
    appointmentEmail: "appointments@elitedental.com",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 3:00 PM",
      sunday: "Closed on Sundays and major holidays"
    }
  };

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
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsSuccess(true);
        setSubmitMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
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
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(clinicInfo.address);
      setSubmitMessage('Address copied to clipboard!');
      setIsSuccess(true);
      setTimeout(() => setSubmitMessage(''), 3000);
    } catch (error) {
      console.error('Failed to copy address:', error);
      setSubmitMessage('Failed to copy address to clipboard');
      setIsSuccess(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      title: 'Visit Our Clinic',
      details: [clinicInfo.address],
      description: 'Free parking available in front of the building',
      action: copyAddress
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      title: 'Call Us',
      details: [clinicInfo.phone, clinicInfo.emergencyPhone + ' Emergency'],
      description: '24/7 emergency dental services available'
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      title: 'Email Us',
      details: [clinicInfo.email, clinicInfo.appointmentEmail],
      description: 'We respond within 24 hours'
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: 'Office Hours',
      details: [clinicInfo.hours.weekdays, clinicInfo.hours.saturday],
      description: clinicInfo.hours.sunday
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/contact-hero.jpg"
            alt="Contact Dental Clinic"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/80 mix-blend-multiply" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed animate-slide-up">
              We're here to answer your questions and schedule your appointment. 
              Contact us today for exceptional dental care!
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm font-semibold">Emergency? Call:</span>
                <span className="ml-2 text-sm font-bold">{clinicInfo.emergencyPhone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                        {item.action && (
                          <button
                            onClick={item.action}
                            className="mt-3 text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
                          >
                            Copy Address
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Map */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Find Our Location</h3>
                    <p className="text-gray-600">{clinicInfo.address}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}`, '_blank')}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center space-x-2 text-sm"
                    >
                      <span>Google Maps</span>
                    </button>
                    <button
                      onClick={() => window.open(`http://maps.apple.com/?daddr=${clinicPosition[0]},${clinicPosition[1]}`, '_blank')}
                      className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors flex items-center space-x-2 text-sm"
                    >
                      <span>Apple Maps</span>
                    </button>
                  </div>
                </div>
                <div className="h-80 rounded-lg overflow-hidden border border-gray-200">
                  <DentalClinicMap 
                    position={clinicPosition}
                    zoom={16}
                    clinicName={clinicInfo.name}
                    address={clinicInfo.address}
                    phone={clinicInfo.phone}
                    emergencyPhone={clinicInfo.emergencyPhone}
                  />
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-center text-blue-700">
                    <Navigation className="w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-semibold">Directions: </span>
                      Click the marker on the map to get turn-by-turn directions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
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
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50`}
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
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50`}
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
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50`}
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
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border ${
                        errors.subject ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50`}
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
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50`}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}