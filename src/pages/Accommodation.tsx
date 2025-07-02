import { motion } from 'framer-motion';

const Accommodation = () => {
  const accommodationTypes = [
    {
      title: 'Shared Dormitory',
      price: 'Included in Course Fee',
      description: 'Comfortable shared rooms with 2-4 beds, perfect for connecting with fellow students',
      features: [
        'Clean, comfortable beds with fresh linens',
        'Shared bathroom facilities',
        'Storage space for personal belongings',
        'Common areas for socializing',
        'Daily housekeeping service',
        'Mosquito nets provided'
      ],
      icon: '🏠'
    },
    {
      title: 'Private Room',
      price: '$200 - $300 additional',
      description: 'Private accommodation for those seeking more personal space and privacy',
      features: [
        'Private room with comfortable bed',
        'Private or semi-private bathroom',
        'Personal storage and study space',
        'Quiet environment for meditation',
        'Daily housekeeping service',
        'Air conditioning (seasonal)'
      ],
      icon: '🏡'
    },
    {
      title: 'Deluxe Room',
      price: '$400 - $500 additional',
      description: 'Premium accommodation with enhanced comfort and amenities',
      features: [
        'Spacious private room',
        'Private bathroom with hot water',
        'Air conditioning and heating',
        'Balcony with mountain/river views',
        'Mini-fridge and tea/coffee facilities',
        'Premium linens and towels'
      ],
      icon: '🏨'
    }
  ];

  const facilities = [
    {
      title: 'Yoga Halls',
      description: 'Spacious, well-ventilated practice spaces with natural light',
      icon: '🧘‍♀️'
    },
    {
      title: 'Meditation Garden',
      description: 'Peaceful outdoor spaces for quiet contemplation and meditation',
      icon: '🌸'
    },
    {
      title: 'Vegetarian Kitchen',
      description: 'Clean, modern kitchen serving fresh, healthy vegetarian meals',
      icon: '🥗'
    },
    {
      title: 'Study Areas',
      description: 'Quiet spaces for reading, journaling, and course study',
      icon: '📚'
    },
    {
      title: 'Common Areas',
      description: 'Social spaces for connecting with fellow students and teachers',
      icon: '👥'
    },
    {
      title: 'Laundry Service',
      description: 'Convenient laundry facilities and services available',
      icon: '👕'
    },
    {
      title: 'WiFi Access',
      description: 'Internet connectivity in common areas for staying connected',
      icon: '📶'
    },
    {
      title: 'Purified Water',
      description: 'Clean, filtered drinking water available throughout the ashram',
      icon: '💧'
    }
  ];

  const rules = [
    'Maintain silence during designated quiet hours (10 PM - 6 AM)',
    'Keep rooms and common areas clean and tidy',
    'Respect other students\' personal space and belongings',
    'No smoking, alcohol, or non-vegetarian food on premises',
    'Participate in daily cleaning duties (karma yoga)',
    'Follow the daily schedule and be punctual for classes',
    'Dress modestly and appropriately for the ashram environment',
    'Use electronic devices mindfully and respectfully'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="accommodationPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <circle cx="60" cy="60" r="40" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="60" cy="60" r="25" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#accommodationPattern)" />
            </svg>
          </div>
          
        </div>
        
        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Accommodation & Facilities
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Experience comfortable, clean, and spiritually nurturing accommodation 
              in our traditional ashram setting, designed to support your yoga journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Accommodation Options
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Choose the accommodation that best suits your needs and budget. 
              All options provide a peaceful, clean environment for your spiritual practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4 text-center">{type.icon}</div>
                  <h3 className="text-2xl font-serif text-ivory-900 mb-2 text-center">{type.title}</h3>
                  <p className="text-primary font-semibold text-center mb-4">{type.price}</p>
                  <p className="text-ivory-700 font-light mb-6 text-center">{type.description}</p>
                  
                  <div className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <span className="text-primary text-lg">✓</span>
                        <span className="text-ivory-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-ivory-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Ashram Facilities
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Our ashram provides all the essential facilities to support your yoga practice, 
              study, and spiritual growth in a peaceful, traditional environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-ivory-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-lg font-serif text-ivory-900 mb-3">{facility.title}</h3>
                <p className="text-ivory-700 font-light text-sm leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ashram Guidelines */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Ashram Guidelines
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              To maintain the sacred and peaceful atmosphere of our ashram, 
              we ask all students to follow these simple guidelines.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-primary text-lg mt-1">•</span>
                    <p className="text-ivory-700 font-light leading-relaxed">{rule}</p>
                  </div>
                ))}
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
              Ready to Book Your Stay?
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Contact us to discuss accommodation options and secure your place 
              in our upcoming yoga teacher training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200 shadow-lg transform hover:scale-105 active:scale-95">
                  Contact Us
                </button>
              </a>
              <a href="/courses">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 transform hover:scale-105 active:scale-95">
                  View Courses
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation; 