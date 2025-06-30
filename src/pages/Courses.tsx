import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      title: '200 Hour Yoga Teacher Training',
      duration: '28 Days',
      price: '$1,500',
      level: 'Beginner to Intermediate',
      description: 'A comprehensive foundation course for aspiring yoga teachers, covering all essential aspects of yoga practice and teaching methodology.',
      highlights: [
        'Hatha Yoga & Vinyasa Flow',
        'Anatomy & Physiology',
        'Yoga Philosophy & History',
        'Teaching Methodology',
        'Pranayama & Meditation',
        'Sanskrit & Mantras',
        'Adjustment & Alignment',
        'Yoga Alliance Certification'
      ],
      schedule: [
        '6:00 AM - Morning Meditation',
        '7:00 AM - Pranayama Practice',
        '8:00 AM - Asana Practice',
        '10:00 AM - Breakfast',
        '11:00 AM - Philosophy Class',
        '1:00 PM - Lunch',
        '3:00 PM - Anatomy & Alignment',
        '5:00 PM - Teaching Practice',
        '7:00 PM - Dinner',
        '8:00 PM - Evening Meditation'
      ]
    },
    {
      title: '300 Hour Advanced Teacher Training',
      duration: '28 Days',
      price: '$2,200',
      level: 'Intermediate to Advanced',
      description: 'An advanced program for experienced practitioners and teachers looking to deepen their knowledge and refine their teaching skills.',
      highlights: [
        'Advanced Asana Practice',
        'Yoga Therapy & Healing',
        'Advanced Pranayama',
        'Sanskrit Studies',
        'Spiritual Practices',
        'Business of Yoga',
        'Prenatal Yoga',
        'Yoga Alliance Continuing Education'
      ],
      schedule: [
        '5:30 AM - Silent Meditation',
        '6:30 AM - Advanced Pranayama',
        '8:00 AM - Advanced Asana',
        '10:00 AM - Breakfast',
        '11:00 AM - Sanskrit Studies',
        '1:00 PM - Lunch',
        '3:00 PM - Yoga Therapy',
        '5:00 PM - Teaching Practicum',
        '7:00 PM - Dinner',
        '8:30 PM - Spiritual Practices'
      ]
    },
    {
      title: 'Meditation & Pranayama Intensive',
      duration: '14 Days',
      price: '$800',
      level: 'All Levels',
      description: 'Dive deep into the ancient practices of meditation and breathwork to cultivate inner peace and spiritual awareness.',
      highlights: [
        'Various Meditation Techniques',
        'Advanced Breathing Practices',
        'Mindfulness Training',
        'Chakra Meditation',
        'Walking Meditation',
        'Silent Retreats',
        'Energy Work',
        'Personal Guidance'
      ],
      schedule: [
        '6:00 AM - Silent Meditation',
        '7:30 AM - Pranayama Practice',
        '9:00 AM - Breakfast',
        '10:30 AM - Theory & Philosophy',
        '12:00 PM - Walking Meditation',
        '1:00 PM - Lunch',
        '3:00 PM - Chakra Meditation',
        '4:30 PM - Personal Practice',
        '7:00 PM - Dinner',
        '8:00 PM - Evening Meditation'
      ]
    }
  ];

  return (
    <div className="pt-20" style={{ scrollBehavior: 'smooth' }}>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary overflow-hidden">
        {/* Sacred Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="lotus" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <circle cx="75" cy="75" r="50" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="75" cy="75" r="35" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="75" cy="75" r="20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lotus)" />
            </svg>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 text-6xl text-white opacity-20 animate-pulse">🪷</div>
          <div className="absolute bottom-20 left-20 text-5xl text-white opacity-20 animate-pulse">🕉️</div>
        </div>
        
        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Transform Your Life
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Discover our comprehensive yoga teacher training programs designed to deepen your practice 
              and prepare you to guide others on their spiritual journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Our Sacred Programs
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Choose from our carefully crafted programs, each designed to meet you where you are 
              on your yoga journey and guide you toward deeper understanding and mastery.
            </p>
          </motion.div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 will-change-transform"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Course Info */}
                  <div className="md:col-span-2 p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                      <span className="text-ivory-600 font-medium">{course.duration}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif font-light text-ivory-900 mb-4 tracking-wide">
                      {course.title}
                    </h3>
                    
                    <p className="text-ivory-700 text-lg mb-8 font-light leading-relaxed">
                      {course.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-serif text-ivory-900 mb-4">Program Highlights</h4>
                        <div className="space-y-3">
                          {course.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center space-x-3">
                              <span className="text-primary text-lg">✓</span>
                              <span className="text-ivory-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-serif text-ivory-900 mb-4">Daily Schedule</h4>
                        <div className="space-y-2">
                          {course.schedule.slice(0, 5).map((item) => (
                            <div key={item} className="text-ivory-700 text-sm">
                              {item}
                            </div>
                          ))}
                          <div className="text-ivory-600 text-sm italic">
                            ... and more
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="bg-ivory-100 p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                        {course.price}
                      </div>
                      <p className="text-ivory-600 mb-8">
                        Includes accommodation, meals, and certification
                      </p>
                      
                      <Link to="/contact">
                        <button className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors duration-200 mb-4 transform hover:scale-105 active:scale-95">
                          Enroll Now
                        </button>
                      </Link>
                      
                      <button className="w-full border-2 border-primary text-primary py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors duration-200 transform hover:scale-105 active:scale-95">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-ivory-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Experience the difference of learning yoga in its birthplace, guided by authentic masters 
              and surrounded by the sacred energy of the Himalayas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: '🏔️',
                title: 'Sacred Location',
                description: 'Learn in Rishikesh, the birthplace of yoga, surrounded by the Himalayas'
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Teachers',
                description: 'Learn from traditional yoga masters with decades of experience'
              },
              {
                icon: '🏆',
                title: 'Yoga Alliance Certified',
                description: 'Internationally recognized certification accepted worldwide'
              },
              {
                icon: '🤝',
                title: 'Lifetime Support',
                description: 'Ongoing guidance and community support after graduation'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-6 rounded-2xl bg-ivory-50 hover:shadow-lg transition-shadow duration-150 will-change-transform"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-3 text-ivory-900">{feature.title}</h3>
                <p className="text-ivory-700 font-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Take the first step towards becoming a certified yoga teacher and transforming your life 
              through authentic practice in the sacred land of yoga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200 shadow-lg transform hover:scale-105 active:scale-95">
                  Apply Now
                </button>
              </Link>
              <Link to="/about">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 transform hover:scale-105 active:scale-95">
                  Meet Our Teachers
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses; 