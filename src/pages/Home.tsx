import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import YogaVideo from '../components/YogaVideo';

const Home = () => {
  const practices = [
    {
      title: 'Hatha Yoga',
      sanskrit: 'हठ योग',
      description: 'Traditional physical practice focusing on postures and breathing techniques',
      icon: '🧘‍♀️',
    },
    {
      title: 'Pranayama',
      sanskrit: 'प्राणायाम',
      description: 'Ancient breathing techniques to control and expand life force energy',
      icon: '🌬️',
    },
    {
      title: 'Meditation',
      sanskrit: 'ध्यान',
      description: 'Mindfulness practices to achieve inner peace and spiritual awareness',
      icon: '🕉️',
    },
    {
      title: 'Philosophy',
      sanskrit: 'दर्शन',
      description: 'Study of ancient yogic texts and spiritual wisdom traditions',
      icon: '📿',
    },
  ];

  const programs = [
    {
      title: '200 Hour YTT',
      duration: '28 Days',
      price: '$1,500',
      description: 'Comprehensive foundation course for aspiring yoga teachers',
      features: ['Hatha & Vinyasa', 'Anatomy & Physiology', 'Teaching Methodology', 'Yoga Philosophy'],
    },
    {
      title: '300 Hour YTT',
      duration: '28 Days',
      price: '$2,200',
      description: 'Advanced training for experienced practitioners and teachers',
      features: ['Advanced Asanas', 'Yoga Therapy', 'Sanskrit Studies', 'Spiritual Practices'],
    },
  ];

  const testimonials = [
    {
      name: 'Sachin',
      country: 'India',
      program: '200 Hour YTT',
      text: 'Life-changing experience! The authentic teachings and spiritual atmosphere of Rishikesh transformed my practice completely.',
      image: '👩‍🦰',
    },
    {
      name: 'Vivek',
      country: 'Spain',
      program: '300 Hour YTT',
      text: 'The depth of knowledge shared by the teachers is incredible. I feel truly prepared to guide others on their yoga journey.',
      image: '🧑‍🦱',
    },
    {
      name: 'Ruhi',
      country: 'Australia',
      program: '200 Hour YTT',
      text: 'Beyond my expectations! The combination of traditional yoga and modern teaching methods is perfect.',
      image: '👩‍🦳',
    },
  ];

  const certifications = [
    {
      name: 'Yoga Alliance',
      description: 'Internationally recognized certification',
      icon: '🏆',
      details: 'RYS 200 & RYS 300 Certified School',
      registrationNumber: 'YAS-12847',
      isYogaAlliance: true,
    },
  ];

  const whyChooseUs = [
    {
      title: 'Authentic Teachings',
      description: 'Learn from traditional yoga masters with decades of experience in classical yoga practices.',
      icon: '🙏',
    },
    {
      title: 'Sacred Location',
      description: 'Practice in Rishikesh, the birthplace of yoga, surrounded by the Himalayas and Ganges.',
      icon: '🏔️',
    },
    {
      title: 'Small Class Sizes',
      description: 'Personalized attention with maximum 15 students per batch for quality learning.',
      icon: '👥',
    },
    {
      title: 'Lifetime Support',
      description: 'Ongoing guidance and support from our teachers even after course completion.',
      icon: '🤝',
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary pt-16 md:pt-0 overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="yogaPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <circle cx="60" cy="60" r="30" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="60" cy="60" r="20" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="60" cy="60" r="10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#yogaPattern)" />
            </svg>
          </div>

          {/* Floating Yoga Icons */}
          <div className="absolute inset-0 hidden sm:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute top-20 right-8 md:right-20 text-4xl md:text-6xl text-white"
            >
              🕉️
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute bottom-32 left-8 md:left-16 text-4xl md:text-5xl text-white"
            >
              🪷
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              className="absolute top-32 left-8 md:left-20 text-3xl md:text-4xl text-white"
            >
              🧘‍♀️
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 2, delay: 2 }}
              className="absolute bottom-20 right-8 md:right-32 text-3xl md:text-4xl text-white"
            >
              ☮️
            </motion.div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-light mb-6 tracking-wide">
              Authentic Yoga in
              <span className="block text-accent font-normal">Rishikesh</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Discover the ancient wisdom of yoga in its birthplace. Join our certified teacher training 
              programs and transform your life through authentic practice and spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  Explore Programs
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto"
                >
                  Meet Our Teachers
                </motion.button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">10+</div>
                <div className="text-xs md:text-sm opacity-80">Certified Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">1+</div>
                <div className="text-xs md:text-sm opacity-80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">12+</div>
                <div className="text-xs md:text-sm opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">100%</div>
                <div className="text-xs md:text-sm opacity-80">Yoga Alliance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-ivory-100 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
              Why Choose Our School?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Experience the difference of authentic yoga education in the spiritual heart of India, 
              where tradition meets modern teaching excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-ivory-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-serif mb-3 text-ivory-900">{item.title}</h3>
                <p className="text-ivory-700 font-light leading-relaxed text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Video Section */}
      <YogaVideo />

      {/* Practices Section */}
      <section className="py-16 md:py-20 bg-ivory-50 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
              Traditional Yoga Practices
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Immerse yourself in the authentic teachings of yoga through our comprehensive 
              programs rooted in ancient tradition and wisdom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl mb-4">{practice.icon}</div>
                <h3 className="text-lg md:text-xl font-serif mb-2 text-ivory-900">{practice.title}</h3>
                <p className="text-primary font-medium mb-3">{practice.sanskrit}</p>
                <p className="text-ivory-700 font-light leading-relaxed text-sm md:text-base">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 bg-ivory-100 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
              Teacher Training Programs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Become a certified yoga teacher through our internationally recognized programs, 
              designed to deepen your practice and prepare you for teaching.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-ivory-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-serif text-ivory-900 mb-2 sm:mb-0">{program.title}</h3>
                    <span className="text-2xl md:text-3xl font-bold text-primary">{program.price}</span>
                  </div>
                  <p className="text-ivory-600 mb-2">{program.duration} • Yoga Alliance Certified</p>
                  <p className="text-ivory-700 mb-6 font-light leading-relaxed text-sm md:text-base">{program.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <span className="text-primary text-lg">✓</span>
                        <span className="text-ivory-700 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/courses">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-ivory-50 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
              Internationally Recognized
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Our certifications are respected worldwide, ensuring your credentials are recognized 
              wherever your yoga journey takes you.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center p-8 md:p-12 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/20 ring-2 ring-primary/10 transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2ZM12 4.44L18.18 9.1L17.45 19.5L12 16.5L6.55 19.5L5.82 9.1L12 4.44Z"/>
                      <path d="M12 6L8.5 12L12 18L15.5 12L12 6Z"/>
                    </svg>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 mb-6">
                    <p className="text-primary font-semibold text-base">REGISTERED YOGA SCHOOL</p>
                    <p className="text-primary/80 text-sm font-medium">#{cert.registrationNumber}</p>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif mb-3 text-ivory-900">{cert.name}</h3>
                <p className="text-ivory-700 font-light text-lg md:text-xl mb-3">{cert.description}</p>
                <p className="text-ivory-600 font-medium text-base md:text-lg">{cert.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-ivory-100 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
              Student Experiences
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Hear from our graduates who have transformed their lives and are now inspiring others 
              around the world through their teaching.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-ivory-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl md:text-5xl mb-3">{testimonial.image}</div>
                  <h4 className="text-base md:text-lg font-serif text-ivory-900">{testimonial.name}</h4>
                  <p className="text-ivory-600 text-sm">{testimonial.country} • {testimonial.program}</p>
                </div>
                <p className="text-ivory-700 font-light leading-relaxed italic text-sm md:text-base">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-20 bg-ivory-50 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
                Sacred Location
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-ivory-700 mb-6 font-light leading-relaxed">
                Located in <strong>Rishikesh</strong>, the "Yoga Capital of the World," our ashram sits 
                on the banks of the holy Ganges River, surrounded by the majestic Himalayas.
              </p>
              <p className="text-ivory-700 mb-8 font-light leading-relaxed">
                This sacred land has been home to yogis and spiritual seekers for thousands of years. 
                The powerful energy of this place naturally supports deep practice and inner transformation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white">
                  <span className="text-xl md:text-2xl">🏔️</span>
                  <span className="text-ivory-800 font-medium text-sm md:text-base">Himalayan Setting</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white">
                  <span className="text-xl md:text-2xl">🌊</span>
                  <span className="text-ivory-800 font-medium text-sm md:text-base">Ganges Riverside</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white">
                  <span className="text-xl md:text-2xl">🏛️</span>
                  <span className="text-ivory-800 font-medium text-sm md:text-base">Ancient Temples</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white">
                  <span className="text-xl md:text-2xl">🧘‍♂️</span>
                  <span className="text-ivory-800 font-medium text-sm md:text-base">Spiritual Energy</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl md:text-8xl mb-4 opacity-60">🏔️</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-ivory-700 mb-2">Rishikesh</h3>
                  <p className="text-ivory-600 text-sm sm:text-base">Yoga Capital of the World</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sacred Wisdom - Rishi Section */}
      <section className="py-20 md:py-24 bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
              Sacred Wisdom of the Rishis
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-ivory-700 max-w-3xl mx-auto font-light leading-relaxed">
              Ancient sages who discovered the profound truths of yoga in the peaceful silence of the Himalayas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Peaceful Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Clean Background */}
              <div className="bg-gradient-to-br from-ivory-50 to-ivory-100 rounded-3xl p-8 md:p-12 shadow-lg">
                
                                 {/* Main Peaceful Scene */}
                 <div className="text-center space-y-8">

                   {/* Peaceful Rishi in Meditation */}
                   <motion.div
                     initial={{ scale: 0.9 }}
                     whileInView={{ scale: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="relative"
                   >
                     <div className="text-8xl md:text-9xl mb-8">🧘</div>
                     <div className="absolute inset-0 -m-8 rounded-full bg-primary/10 blur-lg opacity-60" />
                   </motion.div>

                  {/* Sanskrit Mantra */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <p className="text-primary font-serif text-lg md:text-xl mb-2">ॐ शांति शांति शांति</p>
                    <p className="text-ivory-600 text-sm font-light">Om Shanti Shanti Shanti</p>
                    <p className="text-ivory-500 text-xs mt-2 italic">Peace in Mind, Body & Soul</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-ivory-700 font-light leading-relaxed">
                  For thousands of years, the ancient <strong>Rishis</strong> (sages) of the Himalayas have 
                  preserved and transmitted the sacred knowledge of yoga through deep meditation and 
                  spiritual realization.
                </p>
                
                <p className="text-ivory-700 font-light leading-relaxed">
                  In the peaceful silence of the mountains, these enlightened beings discovered the 
                  profound truths that form the foundation of yogic practice - the unity of mind, 
                  body, and spirit.
                </p>
              </div>

              {/* Clean Wisdom Quotes */}
              <div className="space-y-4">
                <div className="bg-ivory-50 rounded-2xl p-6 border-l-4 border-primary shadow-sm">
                  <p className="text-ivory-800 italic font-light mb-3 text-base leading-relaxed">
                    "Yoga is the journey of the self, through the self, to the self."
                  </p>
                  <p className="text-primary font-medium text-sm">— Ancient Rishi Wisdom</p>
                </div>

                <div className="bg-ivory-50 rounded-2xl p-6 border-l-4 border-accent shadow-sm">
                  <p className="text-ivory-800 italic font-light mb-3 text-base leading-relaxed">
                    "In stillness, the deepest truths reveal themselves."
                  </p>
                  <p className="text-primary font-medium text-sm">— Himalayan Teaching</p>
                </div>
              </div>

              {/* Rishi Qualities - Clean Design */}
              <div className="bg-gradient-to-r from-ivory-50 to-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-serif text-ivory-900 mb-4">Path of the Sage</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧘</span>
                    <span className="text-ivory-700 font-light text-sm">Deep Meditation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌟</span>
                    <span className="text-ivory-700 font-light text-sm">Inner Wisdom</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">☮️</span>
                    <span className="text-ivory-700 font-light text-sm">Perfect Peace</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🕉️</span>
                    <span className="text-ivory-700 font-light text-sm">Divine Unity</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 tracking-wide">
              Begin Your Sacred Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-95 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Take the first step towards becoming a certified yoga teacher and transforming your life 
              through authentic practice in the birthplace of yoga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto"
                >
                  View All Programs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 