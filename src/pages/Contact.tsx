import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-primary overflow-hidden">
        {/* Sacred Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact)" />
            </svg>
          </div>
          
          {/* Floating Elements */}
        </div>
        
        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Begin Your Journey
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Ready to transform your life through authentic yoga practice? We're here to guide you 
              every step of the way on your sacred journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-serif font-light text-ivory-900 mb-6 tracking-wide">
                Apply for Training
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-ivory-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ivory-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-ivory-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ivory-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-ivory-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-ivory-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-ivory-700 font-medium mb-2">
                      Program of Interest *
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ivory-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select a program</option>
                      <option value="200-hour">200 Hour YTT</option>
                      <option value="300-hour">300 Hour YTT</option>
                      <option value="meditation">Meditation Intensive</option>
                      <option value="retreat">Yoga Retreat</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-ivory-700 font-medium mb-2">
                    Tell us about your yoga journey
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-ivory-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Share your experience with yoga, your goals, and what you hope to achieve..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors duration-300 shadow-lg"
                >
                  Submit Application
                </motion.button>
              </form>


            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-light text-ivory-900 mb-6 tracking-wide">
                  Get in Touch
                </h2>
                <p className="text-ivory-700 text-lg font-light leading-relaxed mb-8">
                  Have questions about our programs? We're here to help you find the perfect path 
                  for your yoga journey. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-ivory-100 rounded-2xl">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="text-xl font-display text-ivory-900 mb-2">Location</h3>
                    <p className="text-ivory-700 font-light">
                      Sacred Yoga Ashram<br />
                      Tapovan, Rishikesh<br />
                      Uttarakhand, India 249192
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-ivory-100 rounded-2xl">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-xl font-display text-ivory-900 mb-2">Phone</h3>
                    <p className="text-ivory-700 font-light">
                      +91 98765 43210<br />
                      +91 87654 32109
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-ivory-100 rounded-2xl">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="text-xl font-display text-ivory-900 mb-2">Email</h3>
                    <p className="text-ivory-700 font-light">
                      info@yogalife-rishikesh.com<br />
                      admissions@yogalife-rishikesh.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-ivory-100 rounded-2xl">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h3 className="text-xl font-display text-ivory-900 mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                        Facebook
                      </a>
                      <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                        Instagram
                      </a>
                      <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-primary text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-light mb-4 tracking-wide">
                  Application Process
                </h3>
                <div className="space-y-3 text-sm opacity-95">
                  <div className="flex items-center space-x-3">
                    <span className="text-accent text-lg w-6 flex-shrink-0">1.</span>
                    <span>Submit your application form</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent text-lg w-6 flex-shrink-0">2.</span>
                    <span>Receive confirmation within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent text-lg w-6 flex-shrink-0">3.</span>
                    <span>Complete registration with deposit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent text-lg w-6 flex-shrink-0">4.</span>
                    <span>Receive pre-course materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent text-lg w-6 flex-shrink-0">5.</span>
                    <span>Begin your transformation journey</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-ivory-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Find answers to common questions about our yoga teacher training programs 
              and life at our ashram in Rishikesh.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: 'Do I need prior yoga experience?',
                answer: 'While some yoga experience is helpful, our 200-hour program welcomes beginners. We recommend at least 6 months of regular practice before joining.'
              },
              {
                question: 'What is included in the program fee?',
                answer: 'The fee includes accommodation, all meals, course materials, certification, excursions, and 24/7 support during your stay.'
              },
              {
                question: 'What should I bring to India?',
                answer: 'We provide a detailed packing list upon registration. Essentials include yoga clothes, a yoga mat, comfortable walking shoes, and personal items.'
              },
              {
                question: 'Is the certification internationally recognized?',
                answer: 'Yes, our programs are Yoga Alliance certified and recognized worldwide. You can teach yoga anywhere after completing our training.'
              },
              {
                question: 'What is the daily schedule like?',
                answer: 'Days typically start at 6 AM with meditation, followed by asana practice, meals, theory classes, and evening meditation. Weekends include cultural activities.'
              },
              {
                question: 'How do I get to Rishikesh?',
                answer: 'Fly to Delhi (DEL), then take a train or bus to Haridwar (5-6 hours), followed by a 30-minute taxi to Rishikesh. We provide detailed travel instructions.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-ivory-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-display text-ivory-900 mb-3">{faq.question}</h3>
                <p className="text-ivory-700 font-light leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 