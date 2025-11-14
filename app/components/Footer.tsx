// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-2 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                Elite Dental
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Providing exceptional dental care with cutting-edge technology and compassionate service. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              {/* Social media links would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Doctors', 'Testimonials', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p>📍 123 Dental Avenue, Medical District</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@elitedental.com</p>
              <div className="mt-4">
                <h5 className="font-semibold text-white mb-2">Office Hours</h5>
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elite Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}