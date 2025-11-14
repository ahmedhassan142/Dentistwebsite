// app/about/page.tsx
const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Dental Surgeon',
    bio: 'With over 15 years of experience in cosmetic and restorative dentistry, Dr. Johnson leads our team with expertise and compassion.',
    education: 'DDS - Harvard School of Dental Medicine',
    specialties: ['Cosmetic Dentistry', 'Dental Implants', 'Smile Makeovers'],
    image: '/images/doctor-sarah.jpg'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Orthodontics Specialist',
    bio: 'Dr. Chen specializes in modern orthodontic treatments including Invisalign and traditional braces for patients of all ages.',
    education: 'DMD, MS - University of Pennsylvania',
    specialties: ['Invisalign', 'Traditional Braces', 'Early Intervention'],
    image: '/images/doctor-michael.jpg'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Pediatric Dentist',
    bio: 'Dr. Rodriguez is passionate about creating positive dental experiences for children and teenagers.',
    education: 'DDS, Certificate in Pediatric Dentistry - UCLA',
    specialties: ['Pediatric Dentistry', 'Preventive Care', 'Behavior Management'],
    image: '/images/doctor-emily.jpg'
  }
];

const stats = [
  { number: '5000+', label: 'Happy Patients' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Patient Satisfaction' },
  { number: '24/7', label: 'Emergency Support' }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section 
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url("/images/about-hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Elite Dental Care
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been providing exceptional dental care with a focus on 
              advanced technology, patient comfort, and outstanding results for the entire family.
            </p>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section with Pattern Background */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: 'url("/images/stats-pattern-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Background */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url("/images/mission-vision-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gray-50/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide comprehensive, high-quality dental care in a comfortable and welcoming 
                environment. We believe everyone deserves a healthy, beautiful smile that boosts 
                confidence and enhances quality of life.
              </p>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  {['Patient-Centered Care', 'Clinical Excellence', 'Continuous Education', 'Community Involvement'].map((value, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technology</h2>
              <div className="space-y-4">
                {[
                  'Digital X-Rays with 90% Less Radiation',
                  'CEREC Same-Day Crowns',
                  '3D Cone Beam CT Scanning',
                  'Intraoral Cameras',
                  'Laser Dentistry',
                  'CAD/CAM Technology'
                ].map((tech, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded-lg mr-4">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
              
              {/* Technology Image */}
              <div 
                className="mt-8 h-48 rounded-xl shadow-lg border border-gray-200"
                style={{
                  backgroundImage: 'url("/images/dental-technology.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-full bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-white font-semibold text-lg bg-black/30 px-4 py-2 rounded-lg">
                    Advanced Dental Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Background */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url("/images/team-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our highly qualified dental professionals are dedicated to providing you with 
              the best possible care and treatment outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group">
                {/* Doctor Image */}
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${member.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {member.role.split(' ')[0]}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Education:
                    </h4>
                    <p className="text-sm text-gray-600 pl-4">{member.education}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2 pl-4">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm border border-blue-100">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div 
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{
                backgroundImage: 'url("/images/team-cta-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-teal-500/90"></div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Meet Our Team?</h3>
                <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                  Schedule a consultation and experience the difference our expert team can make for your dental health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/appointment"
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  >
                    Book Consultation
                  </a>
                  <a
                    href="/doctors"
                    className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                  >
                    Meet All Doctors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice History Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url("/images/practice-history-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Practice History</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building trust and delivering excellence since 2008
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: '2008',
                title: 'Practice Founded',
                description: 'Established with a vision to provide premium dental care in a comfortable environment.'
              },
              {
                year: '2015',
                title: 'Technology Upgrade',
                description: 'Invested in state-of-the-art digital equipment and advanced treatment technologies.'
              },
              {
                year: '2023',
                title: 'Expanded Services',
                description: 'Added specialized services including orthodontics and advanced cosmetic procedures.'
              }
            ].map((milestone, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                <div className="text-3xl font-bold text-white mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                <p className="text-blue-100">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}