// app/services/page.tsx
import Link from 'next/link';

const services = [
  {
    title: 'Teeth Cleaning',
    description: 'Professional cleaning to remove plaque and tartar buildup.',
    icon: '🦷',
    features: ['Plaque Removal', 'Tartar Removal', 'Teeth Polishing', 'Fluoride Treatment'],
    price: '$80 - $150',
    duration: '45-60 mins'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth that look and feel natural.',
    icon: '🌟',
    features: ['Titanium Implant', 'Abutment Placement', 'Custom Crown', 'Lifetime Support'],
    price: '$2,500 - $4,000',
    duration: '2-3 visits'
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening for a brighter, more confident smile.',
    icon: '✨',
    features: ['In-Office Whitening', 'Take-Home Kits', 'Stain Removal', 'Long-Lasting Results'],
    price: '$300 - $600',
    duration: '1-2 visits'
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern braces and aligners.',
    icon: '🔧',
    features: ['Traditional Braces', 'Invisalign', 'Retainers', 'Regular Adjustments'],
    price: '$3,000 - $7,000',
    duration: '12-24 months'
  },
  {
    title: 'Root Canal',
    description: 'Save infected teeth with comfortable root canal treatment.',
    icon: '🛠️',
    features: ['Painless Procedure', 'Infection Removal', 'Tooth Preservation', 'Crown Placement'],
    price: '$800 - $1,500',
    duration: '1-2 visits'
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with veneers, bonding, and cosmetic procedures.',
    icon: '🎨',
    features: ['Veneers', 'Dental Bonding', 'Smile Makeover', 'Gum Contouring'],
    price: '$500 - $2,500',
    duration: '2-3 visits'
  }
];

export default function Services() {
  return (
    <div 
      className="min-h-screen py-20 relative"
      style={{
        backgroundImage: 'url("/images/services-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/95 to-white/95"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Dental Services</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care tailored to your unique needs. From routine checkups to advanced cosmetic procedures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {service.price}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                </div>
                
                <Link
                  href="/appointment"
                  className="block w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div 
            className="rounded-2xl p-8 text-white relative overflow-hidden"
            style={{
              backgroundImage: 'url("/images/services-cta-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-teal-500/90"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
              <p className="text-xl mb-6 opacity-90">Schedule your consultation today and take the first step towards perfect dental health.</p>
              <Link
                href="/appointment"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}