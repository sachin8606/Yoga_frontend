import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="termsPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#termsPattern)" />
            </svg>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 text-6xl text-white opacity-20">📜</div>
          <div className="absolute bottom-20 left-20 text-5xl text-white opacity-20">⚖️</div>
        </div>
        
        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Understanding our mutual responsibilities and commitments 
              for a harmonious yoga learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  By registering for our courses or using our services, you agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, please do not use our services. 
                  These terms constitute a legally binding agreement between you and YogaLife Rishikesh.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">2. Course Registration and Payment</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  <strong>Registration:</strong> Course registration is confirmed upon receipt of the required deposit. 
                  Full payment must be completed before the course start date.
                </p>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  <strong>Payment Terms:</strong> We accept bank transfers, PayPal, and cash payments. 
                  Payment plans may be arranged with advance notice.
                </p>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  <strong>Course Fees Include:</strong> Accommodation, vegetarian meals, study materials, 
                  certification, and access to all scheduled classes and activities.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">3. Cancellation and Refund Policy</h2>
                <ul className="list-disc pl-6 text-ivory-700 font-light leading-relaxed mb-6">
                  <li><strong>30+ days before course:</strong> Full refund minus 10% processing fee</li>
                  <li><strong>15-30 days before course:</strong> 50% refund</li>
                  <li><strong>Less than 15 days:</strong> No refund (credit may be offered for future courses)</li>
                  <li><strong>Emergency situations:</strong> Considered on a case-by-case basis</li>
                  <li><strong>Course cancellation by us:</strong> Full refund or transfer to another date</li>
                </ul>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">4. Health and Safety Requirements</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  <strong>Health Disclosure:</strong> You must disclose any health conditions, injuries, 
                  or physical limitations that may affect your ability to participate safely in yoga practice.
                </p>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  <strong>Medical Clearance:</strong> We may require medical clearance for certain conditions. 
                  You are responsible for determining your fitness to participate.
                </p>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  <strong>Insurance:</strong> We strongly recommend travel and health insurance. 
                  We are not responsible for medical expenses or evacuation costs.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">5. Code of Conduct</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  Students are expected to:
                </p>
                <ul className="list-disc pl-6 text-ivory-700 font-light leading-relaxed mb-6">
                  <li>Respect teachers, fellow students, and ashram staff</li>
                  <li>Follow the daily schedule and be punctual for classes</li>
                  <li>Maintain the peaceful atmosphere of the ashram</li>
                  <li>Abstain from alcohol, drugs, and non-vegetarian food on premises</li>
                  <li>Dress modestly and appropriately for yoga practice</li>
                  <li>Participate in karma yoga (community service) activities</li>
                  <li>Respect quiet hours and meditation periods</li>
                </ul>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">6. Accommodation and Facilities</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  <strong>Accommodation:</strong> Basic, clean accommodation is provided. Private rooms 
                  are available at additional cost and subject to availability.
                </p>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  <strong>Meals:</strong> Vegetarian meals are provided. Special dietary requirements 
                  can be accommodated with advance notice.
                </p>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  <strong>Facilities:</strong> Use of facilities is included in the course fee. 
                  Students are responsible for any damage to property.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">7. Intellectual Property</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  All course materials, teachings, and content are proprietary to YogaLife Rishikesh. 
                  Students may not record, reproduce, or distribute course content without written permission. 
                  Course materials are for personal use only.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  YogaLife Rishikesh, its teachers, and staff are not liable for any injury, illness, 
                  loss, or damage occurring during or as a result of participation in our programs. 
                  Students participate at their own risk and are encouraged to maintain appropriate insurance coverage.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">9. Certification Requirements</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  To receive certification, students must attend all scheduled classes, complete all 
                  assignments, pass written and practical examinations, and demonstrate competency in 
                  teaching methodology. Partial attendance may result in a certificate of attendance 
                  rather than full certification.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">10. Photography and Media</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  By participating in our programs, you consent to being photographed or filmed for 
                  promotional purposes. If you prefer not to be included in such materials, please 
                  inform us in writing upon registration.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">11. Force Majeure</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  We are not liable for delays or cancellations due to circumstances beyond our control, 
                  including but not limited to natural disasters, government actions, pandemics, or other 
                  force majeure events. In such cases, we will work with students to reschedule or 
                  provide appropriate alternatives.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">12. Governing Law</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  These terms are governed by the laws of India. Any disputes will be resolved through 
                  meditation and, if necessary, in the courts of Uttarakhand, India.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">13. Changes to Terms</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-6">
                  We reserve the right to modify these terms at any time. Changes will be posted on 
                  our website and communicated to registered students. Continued participation 
                  constitutes acceptance of modified terms.
                </p>

                <h2 className="text-2xl font-serif text-ivory-900 mb-4">14. Contact Information</h2>
                <p className="text-ivory-700 font-light leading-relaxed mb-4">
                  For questions about these terms or our services, please contact us:
                </p>
                <div className="bg-ivory-50 p-6 rounded-lg mb-6">
                  <p className="text-ivory-700 font-light leading-relaxed">
                    <strong>YogaLife Rishikesh</strong><br />
                    Sacred Yoga Ashram<br />
                    Tapovan, Rishikesh<br />
                    Uttarakhand, India 249192<br />
                    Email: info@yogalife-rishikesh.com<br />
                    Phone: +91 98765 43210
                  </p>
                </div>

                <p className="text-ivory-600 text-sm italic">
                  By registering for our courses, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms of Service. We look forward to supporting 
                  you on your yoga journey with love, respect, and dedication.
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Join us for an authentic yoga experience in the birthplace of yoga. 
              Contact us to start your registration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200 shadow-lg transform hover:scale-105 active:scale-95">
                  Contact Us
                </button>
              </a>
              <a href="/privacy">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 transform hover:scale-105 active:scale-95">
                  Privacy Policy
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms; 