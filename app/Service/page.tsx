import Image from 'next/image';
import Link from 'next/link';
import { Shield, Clock, Award, Users, ArrowRight, Sparkles, Activity, Smile } from 'lucide-react';

const services = [
  {
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional cleaning to remove plaque and tartar buildup for optimal oral health.',
    icon: '🦷',
    image: '/images/services/teeth-cleaning.jpg',
    features: ['Plaque Removal', 'Tartar Removal', 'Teeth Polishing', 'Fluoride Treatment'],
    price: '$80 - $150',
    duration: '45-60 mins',
    highlight: 'Most Popular'
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth that look, feel, and function like natural teeth.',
    icon: '🌟',
    image: '/images/services/dental-implants.jpg',
    features: ['Titanium Implant', 'Abutment Placement', 'Custom Crown', 'Lifetime Support'],
    price: '$2,500 - $4,000',
    duration: '2-3 visits',
    highlight: 'Advanced'
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Professional whitening for a brighter, more confident smile with lasting results.',
    icon: '✨',
    image: '/images/services/teeth-whitening.jpg',
    features: ['In-Office Whitening', 'Take-Home Kits', 'Stain Removal', 'Long-Lasting Results'],
    price: '$300 - $600',
    duration: '1-2 visits',
    highlight: 'Popular'
  },
  {
    slug: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern braces and clear aligners for a perfect smile.',
    icon: '🔧',
    image: '/images/services/orthodontics.jpg',
    features: ['Traditional Braces', 'Invisalign', 'Retainers', 'Regular Adjustments'],
    price: '$3,000 - $7,000',
    duration: '12-24 months',
    highlight: 'Comprehensive'
  },
  {
    slug: 'root-canal',
    title: 'Root Canal',
    description: 'Save infected teeth with comfortable, pain-free root canal treatment.',
    icon: '🛠️',
    image: '/images/services/root-canal.jpg',
    features: ['Painless Procedure', 'Infection Removal', 'Tooth Preservation', 'Crown Placement'],
    price: '$800 - $1,500',
    duration: '1-2 visits',
    highlight: 'Specialized'
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with veneers, bonding, and complete smile makeovers.',
    icon: '🎨',
    image: '/images/services/cosmetic-dentistry.jpg',
    features: ['Veneers', 'Dental Bonding', 'Smile Makeover', 'Gum Contouring'],
    price: '$500 - $2,500',
    duration: '2-3 visits',
    highlight: 'Premium'
  }
];

const stats = [
  {
    icon: <Smile className="w-6 h-6" />,
    number: '10,000+',
    label: 'Happy Patients',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Activity className="w-6 h-6" />,
    number: '50+',
    label: 'Dental Services',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    number: '15+',
    label: 'Years Experience',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <Award className="w-6 h-6" />,
    number: '100%',
    label: 'Insurance Accepted',
    color: 'from-purple-500 to-purple-600'
  }
];

const benefits = [
  {
    title: 'Insurance Friendly',
    description: 'We work with all major insurance providers to maximize your benefits.',
    icon: Shield
  },
  {
    title: 'Flexible Hours',
    description: 'Evening and weekend appointments available for your convenience.',
    icon: Clock
  },
  {
    title: 'Experienced Team',
    description: 'Board-certified specialists with advanced training.',
    icon: Award
  },
  {
    title: 'Personalized Care',
    description: 'Customized treatment plans tailored to your needs.',
    icon: Users
  }
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/service-hero.jpg"
            alt="Our Dental Services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/80 mix-blend-multiply" />
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center gap-2 text-blue-200 mb-6 animate-fade-in">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase">Comprehensive Dental Care</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Dental Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed animate-slide-up">
              Experience exceptional dental care with our comprehensive range of services. 
              From routine checkups to advanced cosmetic procedures, we're here for you.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Link
                href="/Appointment"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Appointment
              </Link>
              <Link
                href="/Services"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/50"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-white text-center">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-lg mb-2`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Complete Dental Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our wide range of dental services designed to meet all your oral health needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Service Icon & Highlight */}
                  <div className="absolute bottom-4 left-4 flex items-end justify-between w-full pr-8">
                    <div className="flex items-center gap-2">
                      <div className="text-4xl bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        {service.icon}
                      </div>
                    </div>
                    {service.highlight && (
                      <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {service.highlight}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                      What's Included:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                    {/* <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Excellence in Dental Care
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine expertise, technology, and compassion to deliver the highest quality dental care.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats & CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Smile?</h3>
              <p className="text-white/90 mb-8">
                Take the first step towards better oral health. Our team is ready to provide you with exceptional care.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white">✓</span>
                  </div>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white">✓</span>
                  </div>
                  <span>Flexible payment plans</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white">✓</span>
                  </div>
                  <span>Insurance welcome</span>
                </div>
              </div>
              
              <Link
                href="/Appointment"
                className="block w-full bg-white text-blue-600 hover:bg-blue-50 text-center py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/services-cta-bg.jpg"
                alt="Get Started Today"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-teal-500/90"></div>
            </div>
            
            <div className="relative z-10 px-8 py-16 lg:py-20 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up">
                Schedule a comprehensive evaluation with our dental specialists. We'll assess your needs and create a personalized treatment plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/Doctor"
                  className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/50"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}