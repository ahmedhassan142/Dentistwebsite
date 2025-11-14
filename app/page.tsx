// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/dental-clinic-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-teal-500/40"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Perfect Smile <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Starts Here</span>
              </h1>
              <p className="mt-6 text-xl text-blue-100 leading-relaxed">
                Experience world-class dental care with cutting-edge technology and a compassionate team dedicated to your oral health and beautiful smile.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Book Your Appointment
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-1 shadow-2xl border border-white/30">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                  <div className="bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-lg w-full h-64 lg:h-80 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">🦷</div>
                      <p className="text-lg font-semibold">Modern Dental Clinic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Subtle Background */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/dental-pattern-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Elite Dental?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced technology with compassionate care to deliver exceptional dental experiences.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment for precise diagnostics and comfortable treatments.'
              },
              {
                icon: '👨‍⚕️',
                title: 'Expert Dentists',
                description: 'Highly qualified and experienced dental professionals dedicated to your care.'
              },
              {
                icon: '💫',
                title: 'Pain-Free Procedures',
                description: 'Gentle techniques and modern anesthesia for a comfortable experience.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}