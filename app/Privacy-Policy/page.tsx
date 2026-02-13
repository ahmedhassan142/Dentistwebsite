import Link from 'next/link';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated: January 15, 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-blue-800 font-medium mb-0">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you visit our dental clinic or use our website.
            </p>
          </div>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you:</p>
          <ul>
            <li>Schedule an appointment</li>
            <li>Complete patient forms</li>
            <li>Contact us through our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Visit our clinic</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name, email address, phone number, and address</li>
            <li>Date of birth and insurance information</li>
            <li>Medical and dental history</li>
            <li>Payment information</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our dental services</li>
            <li>Schedule and manage appointments</li>
            <li>Process insurance claims and payments</li>
            <li>Communicate with you about your care</li>
            <li>Send appointment reminders and follow-up information</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
          <ul>
            <li>Healthcare providers involved in your treatment</li>
            <li>Insurance companies for payment purposes</li>
            <li>Business associates who assist in our operations (with confidentiality agreements)</li>
            <li>Government agencies when required by law</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Secure socket layer (SSL) technology</li>
            <li>Access controls and authentication procedures</li>
            <li>Regular security assessments and updates</li>
          </ul>

          <h2>5. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request corrections to your information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt-out of marketing communications</li>
            <li>Receive a copy of your dental records</li>
          </ul>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. We use:</p>
          <ul>
            <li>Essential cookies for website functionality</li>
            <li>Analytics cookies to understand website usage</li>
            <li>Marketing cookies for targeted advertising (with consent)</li>
          </ul>

          <h2>7. Children's Privacy</h2>
          <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children without parental consent.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date.</p>

          <h2>9. Contact Us</h2>
          <p>If you have questions about this privacy policy or your personal information, please contact us:</p>
          
          <div className="bg-gray-50 p-6 rounded-xl mt-4">
            <div className="flex items-start mb-4">
              <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-600">privacy@elitedental.com</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-gray-600">123 Dental Avenue, Medical District, CA 90210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            By using our services, you acknowledge that you have read and understood this privacy policy.
          </p>
          <Link 
            href="/"
            className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}