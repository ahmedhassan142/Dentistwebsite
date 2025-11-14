// app/doctors/page.tsx
const dentalTeam = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Chief Dental Surgeon',
    specialty: 'Cosmetic & Restorative Dentistry',
    education: [
      'Doctor of Dental Surgery - Harvard School of Dental Medicine',
      'Advanced Education in General Dentistry - UCLA',
      'Fellow, American Academy of Cosmetic Dentistry'
    ],
    bio: 'With over 15 years of experience, Dr. Johnson specializes in smile makeovers, dental implants, and full-mouth rehabilitation. She is committed to providing pain-free, exceptional dental care.',
    achievements: [
      'Board Certified Cosmetic Dentist',
      '500+ Successful Smile Makeovers',
      'Advanced Laser Dentistry Certified'
    ],
    image: '/api/placeholder/400/500'
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Orthodontics Specialist',
    specialty: 'Orthodontics & Dentofacial Orthopedics',
    education: [
      'Doctor of Dental Medicine - University of Pennsylvania',
      'Master of Science in Orthodontics - USC',
      'Board Certified Orthodontist'
    ],
    bio: 'Dr. Chen is passionate about creating beautiful, functional smiles for patients of all ages. He specializes in Invisalign, traditional braces, and early interceptive treatment.',
    achievements: [
      'Invisalign Diamond Provider',
      'Top 1% Invisalign Provider Nationwide',
      '15+ Years Orthodontic Experience'
    ],
    image: '/api/placeholder/400/500'
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Pediatric Dentist',
    specialty: 'Pediatric & Adolescent Dentistry',
    education: [
      'Doctor of Dental Surgery - UCLA',
      'Certificate in Pediatric Dentistry - Children\'s Hospital Los Angeles',
      'Board Certified Pediatric Dentist'
    ],
    bio: 'Dr. Rodriguez creates fun, positive dental experiences for children. Her gentle approach and specialized training make dental visits enjoyable for young patients.',
    achievements: [
      'Specialized in Behavior Management',
      'Hospital Dentistry Trained',
      '10+ Years Pediatric Experience'
    ],
    image: '/api/placeholder/400/500'
  },
  {
    name: 'Dr. James Wilson',
    title: 'Periodontist',
    specialty: 'Periodontics & Dental Implants',
    education: [
      'Doctor of Dental Surgery - Columbia University',
      'Certificate in Periodontics - NYU',
      'Master of Science in Oral Biology'
    ],
    bio: 'Dr. Wilson specializes in the treatment of gum disease and dental implant placement. His expertise ensures optimal oral health and successful long-term outcomes.',
    achievements: [
      'Advanced Bone Grafting Specialist',
      'LANAP Laser Certified',
      '12+ Years Periodontal Experience'
    ],
    image: '/api/placeholder/400/500'
  }
];

export default function Doctors() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Dental Experts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly skilled dental professionals is dedicated to providing you with 
            exceptional care using the latest technology and techniques.
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-16">
          {dentalTeam.map((doctor, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:flex`}>
              {/* Doctor Image */}
              <div className="lg:w-2/5">
                <div className="h-64 lg:h-full bg-gradient-to-br from-blue-100 to-teal-100"></div>
              </div>
              
              {/* Doctor Info */}
              <div className="lg:w-3/5 p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
                  <p className="text-xl text-blue-600 font-semibold mb-1">{doctor.title}</p>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{doctor.bio}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Education & Credentials</h4>
                    <ul className="space-y-2">
                      {doctor.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {doctor.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule with {doctor.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Support Team Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Support Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Dental Hygienists',
                description: 'Our certified hygienists provide thorough cleanings and preventive care with gentle techniques.',
                members: ['Lisa Thompson, RDH', 'Maria Garcia, RDH', 'Sarah Johnson, RDH']
              },
              {
                role: 'Dental Assistants',
                description: 'Trained assistants ensure your comfort and support our dentists during procedures.',
                members: ['Jennifer Lee, CDA', 'Amanda Wilson, CDA', 'Robert Brown, CDA']
              },
              {
                role: 'Front Office Team',
                description: 'Friendly staff to help with scheduling, insurance, and answering your questions.',
                members: ['Karen Miller - Office Manager', 'David Chen - Insurance Coordinator', 'Emily Davis - Patient Coordinator']
              }
            ].map((team, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{team.role}</h3>
                <p className="text-gray-600 mb-4">{team.description}</p>
                <div className="space-y-2">
                  {team.members.map((member, idx) => (
                    <p key={idx} className="text-sm text-gray-700">{member}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}