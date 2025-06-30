import { motion } from 'framer-motion';

const Workshops = () => {
  const workshops = [
    {
      title: 'Advanced Pranayama Workshop',
      duration: '3 Days',
      price: '$150',
      level: 'Intermediate to Advanced',
      description: 'Deepen your understanding of advanced breathing techniques and their therapeutic applications.',
      highlights: [
        'Advanced breathing patterns',
        'Therapeutic applications',
        'Energy management',
        'Subtle body awareness',
        'Personal practice development'
      ],
      dates: ['March 15-17, 2024', 'June 20-22, 2024', 'September 10-12, 2024'],
      icon: '🌬️'
    },
    {
      title: 'Yoga Philosophy Intensive',
      duration: '5 Days',
      price: '$250',
      level: 'All Levels',
      description: 'Explore the profound philosophical foundations of yoga through ancient texts and modern applications.',
      highlights: [
        'Yoga Sutras of Patanjali',
        'Bhagavad Gita study',
        'Eight limbs of yoga',
        'Sanskrit terminology',
        'Practical philosophy'
      ],
      dates: ['April 5-9, 2024', 'July 15-19, 2024', 'October 20-24, 2024'],
      icon: '📿'
    },
    {
      title: 'Meditation Mastery Retreat',
      duration: '7 Days',
      price: '$350',
      level: 'All Levels',
      description: 'Immerse yourself in various meditation techniques and establish a sustainable daily practice.',
      highlights: [
        'Multiple meditation styles',
        'Silent practice sessions',
        'Walking meditation',
        'Mindfulness techniques',
        'Personal guidance'
      ],
      dates: ['May 10-16, 2024', 'August 5-11, 2024', 'November 15-21, 2024'],
      icon: '🧘‍♂️'
    },
    {
      title: 'Yoga Therapy Workshop',
      duration: '4 Days',
      price: '$200',
      level: 'Intermediate',
      description: 'Learn therapeutic applications of yoga for common health conditions and injuries.',
      highlights: [
        'Therapeutic sequencing',
        'Anatomy for therapy',
        'Modification techniques',
        'Stress management',
        'Holistic healing approach'
      ],
      dates: ['March 25-28, 2024', 'June 30-July 3, 2024', 'September 20-23, 2024'],
      icon: '🩺'
    },
    {
      title: 'Sanskrit & Mantra Workshop',
      duration: '2 Days',
      price: '$100',
      level: 'All Levels',
      description: 'Discover the power of sacred sounds and learn traditional Sanskrit mantras.',
      highlights: [
        'Sanskrit pronunciation',
        'Traditional mantras',
        'Chanting techniques',
        'Sound healing',
        'Sacred geometry'
      ],
      dates: ['April 20-21, 2024', 'July 25-26, 2024', 'October 30-31, 2024'],
      icon: '🕉️'
    },
    {
      title: 'Ayurveda & Yoga Integration',
      duration: '6 Days',
      price: '$300',
      level: 'Intermediate',
      description: 'Explore the sister science of yoga and learn to integrate Ayurvedic principles into practice.',
      highlights: [
        'Ayurvedic constitution',
        'Seasonal practices',
        'Yoga for doshas',
        'Lifestyle guidance',
        'Holistic wellness'
      ],
      dates: ['May 20-25, 2024', 'August 15-20, 2024', 'November 25-30, 2024'],
      icon: '🌿'
    }
  ];

  const workshopBenefits = [
    {
      title: 'Specialized Knowledge',
      description: 'Gain deep expertise in specific areas of yoga practice and philosophy',
      icon: '🎓'
    },
    {
      title: 'Practical Skills',
      description: 'Learn techniques you can immediately apply in your personal practice',
      icon: '🛠️'
    },
    {
      title: 'Expert Guidance',
      description: 'Learn from experienced teachers and traditional masters',
      icon: '👨‍🏫'
    },
    {
      title: 'Community Connection',
      description: 'Connect with like-minded practitioners from around the world',
      icon: '🤝'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="workshopPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#workshopPattern)" />
            </svg>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 text-6xl text-white opacity-20">🎯</div>
          <div className="absolute bottom-20 left-20 text-5xl text-white opacity-20">🌟</div>
        </div>
        
        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Specialized Workshops
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Deepen your practice with our focused workshops designed to explore 
              specific aspects of yoga, meditation, and spiritual development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Upcoming Workshops
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Join our specialized workshops to deepen your understanding and practice 
              in specific areas of yoga and spiritual development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{workshop.icon}</div>
                    <div className="text-right">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {workshop.level}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-ivory-900 mb-2">{workshop.title}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-ivory-600 font-medium">{workshop.duration}</span>
                    <span className="text-2xl font-bold text-primary">{workshop.price}</span>
                  </div>
                  
                  <p className="text-ivory-700 font-light mb-6 leading-relaxed">{workshop.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-serif text-ivory-900 mb-3">Workshop Highlights</h4>
                    <div className="space-y-2">
                      {workshop.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-3">
                          <span className="text-primary text-lg">✓</span>
                          <span className="text-ivory-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-serif text-ivory-900 mb-3">Upcoming Dates</h4>
                    <div className="space-y-1">
                      {workshop.dates.map((date, dateIndex) => (
                        <div key={dateIndex} className="text-ivory-600 text-sm">
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="/contact">
                    <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 transform hover:scale-105 active:scale-95">
                      Register Now
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-20 bg-ivory-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Why Join Our Workshops?
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Our workshops offer unique opportunities to dive deep into specific aspects 
              of yoga practice with expert guidance and focused learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-ivory-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-serif text-ivory-900 mb-3">{benefit.title}</h3>
                <p className="text-ivory-700 font-light leading-relaxed">{benefit.description}</p>
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
              Ready to Deepen Your Practice?
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Join us for transformative workshops that will enhance your understanding 
              and practice of yoga in the sacred environment of Rishikesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200 shadow-lg transform hover:scale-105 active:scale-95">
                  Register Now
                </button>
              </a>
              <a href="/courses">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 transform hover:scale-105 active:scale-95">
                  View Full Courses
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Workshops; 