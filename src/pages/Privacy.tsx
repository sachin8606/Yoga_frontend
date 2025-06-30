import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="privacyPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#privacyPattern)" />
            </svg>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 text-6xl text-white opacity-20">🔒</div>
          <div className="absolute bottom-20 left-20 text-5xl text-white opacity-20">📋</div>
        </div>
        
        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Your privacy and personal information are sacred to us. 
              Learn how we protect and handle your data with care and respect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-ivory-600 mb-8">
                  <strong>Last updated:</strong> March 2024
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">1. Information We Collect</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  We collect information you provide directly to us when you register for our courses, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  address, emergency contact information, health conditions relevant to yoga practice, 
                  and payment information.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-ivory-700 font-light leading-relaxed mb-6">
                  <li>Process your course registration and payments</li>
                  <li>Communicate with you about your courses and our services</li>
                  <li>Provide personalized yoga instruction and modifications</li>
                  <li>Ensure your safety during yoga practice</li>
                  <li>Send you important updates about your program</li>
                  <li>Improve our services and course offerings</li>
                </ul>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">3. Information Sharing</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances: with your consent, 
                  to comply with legal obligations, to protect our rights and safety, or with service 
                  providers who assist us in operating our programs (under strict confidentiality agreements).
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">4. Data Security</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. This includes physical, 
                  electronic, and administrative safeguards. However, no method of transmission over the 
                  internet is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">5. Health Information</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  Any health information you share with us is treated with the utmost confidentiality. 
                  This information is used solely to ensure your safety during yoga practice and to 
                  provide appropriate modifications. We follow strict protocols to protect your health data.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">6. Cookies and Tracking</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  Our website may use cookies to enhance your browsing experience. Cookies are small 
                  files stored on your device that help us understand how you use our website. 
                  You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">7. Your Rights</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-ivory-700 font-light leading-relaxed mb-6">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">8. International Students</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  For international students, we may need to share certain information with relevant 
                  authorities as required by Indian law, including visa and immigration requirements. 
                  We will always inform you of such requirements and obtain your consent where possible.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">9. Children's Privacy</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  Our services are intended for adults 18 years and older. We do not knowingly collect 
                  personal information from children under 18. If you are under 18, please have a 
                  parent or guardian contact us on your behalf.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  We may update this privacy policy from time to time. We will notify you of any 
                  significant changes by email or by posting a notice on our website. Your continued 
                  use of our services after such changes constitutes acceptance of the updated policy.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">11. Contact Us</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our data practices, 
                  please contact us at:
                </p>
                <div className="bg-ivory-50 p-6 rounded-lg mb-6">
                  <p className="text-ivory-700 font-light leading-relaxed">
                    <strong>YogaLife Rishikesh</strong><br />
                    Sacred Yoga Ashram<br />
                    Tapovan, Rishikesh<br />
                    Uttarakhand, India 249192<br />
                    Email: privacy@yogalife-rishikesh.com<br />
                    Phone: +91 98765 43210
                  </p>
                </div>

                <p className="text-ivory-600 text-sm italic">
                  This privacy policy is governed by Indian law and reflects our commitment to 
                  protecting your personal information in accordance with applicable data protection 
                  regulations and our spiritual values of respect and care for all beings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide">
              Questions About Privacy?
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              We're committed to transparency and protecting your privacy. 
              Contact us if you have any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200 shadow-lg transform hover:scale-105 active:scale-95">
                  Contact Us
                </button>
              </a>
              <a href="/terms">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 transform hover:scale-105 active:scale-95">
                  Terms of Service
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy; 