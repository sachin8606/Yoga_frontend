import { motion } from 'framer-motion';

const About = () => {
  const teachers = [
    {
      name: 'Swami Yogananda',
      role: 'Lead Teacher',
      expertise: 'Hatha Yoga, Philosophy',
      image: '/teachers/teacher1.jpg',
      bio: '25 years of teaching experience in traditional Hatha Yoga and Vedantic Philosophy.',
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Anatomy Teacher',
      expertise: 'Anatomy, Alignment',
      image: '/teachers/teacher2.jpg',
      bio: 'PhD in Human Anatomy with 15 years of experience in yoga therapy and alignment.',
    },
    {
      name: 'Guru Raj Kumar',
      role: 'Meditation Teacher',
      expertise: 'Meditation, Pranayama',
      image: '/teachers/teacher3.jpg',
      bio: 'Master practitioner of meditation and pranayama with 20 years of experience.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary overflow-hidden">
        {/* Beautiful Yogic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mandala)" />
            </svg>
          </div>

        </div>
        
        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Our Sacred Journey
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Established in 2010, our ashram has been a sanctuary for spiritual growth and authentic 
              yoga education in the sacred town of Rishikesh, guided by ancient wisdom and modern understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-ivory-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-light text-ivory-900 mb-6 tracking-wide">
                Our Sacred Mission
              </h2>
              <p className="text-ivory-700 text-lg mb-6 font-light leading-relaxed">
                We are dedicated to preserving and sharing the authentic teachings of yoga while making 
                them accessible to modern practitioners seeking genuine transformation.
              </p>
              <p className="text-ivory-700 text-lg mb-8 font-light leading-relaxed">
                Our mission is to create a nurturing environment where students can deepen their practice, 
                transform their lives, and become skilled yoga teachers rooted in traditional wisdom.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🕉️', text: 'Authentic Yoga Education' },
                  { icon: '🌱', text: 'Spiritual Growth' },
                  { icon: '✨', text: 'Personal Transformation' },
                  { icon: '🤝', text: 'Global Community' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center space-x-3 p-3 rounded-lg bg-ivory-50">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-ivory-800 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 opacity-60">🏛️</div>
                  <h3 className="text-2xl font-serif text-ivory-700 mb-2">Sacred Ashram</h3>
                  <p className="text-ivory-600">Traditional learning environment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Our Enlightened Teachers
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Learn from authentic masters who have dedicated their lives to the practice and 
              teaching of traditional yoga in its purest form.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-80">🧘‍♂️</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2 text-ivory-900">{teacher.name}</h3>
                  <p className="text-primary font-semibold mb-2">{teacher.role}</p>
                  <p className="text-ivory-600 text-sm mb-4 font-medium">{teacher.expertise}</p>
                  <p className="text-ivory-700 font-light leading-relaxed">{teacher.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-ivory-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Our Sacred Values
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              These timeless principles guide our teaching and create the foundation for 
              authentic yoga practice and spiritual growth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'Preserving and teaching traditional yoga practices with integrity',
                icon: '🕉️',
              },
              {
                title: 'Excellence',
                description: 'Maintaining the highest standards in yoga education and practice',
                icon: '⭐',
              },
              {
                title: 'Community',
                description: 'Creating a supportive global family of yoga practitioners',
                icon: '🤝',
              },
              {
                title: 'Growth',
                description: 'Fostering continuous personal and spiritual development',
                icon: '🌱',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 rounded-2xl bg-ivory-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-serif mb-4 text-ivory-900">{value.title}</h3>
                <p className="text-ivory-700 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Alliance Certification Section */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Internationally Certified
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Our yoga teacher training programs are fully certified and recognized by Yoga Alliance USA, 
              ensuring your credentials are accepted worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Yoga Alliance Certificate */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-primary/10">
                <div className="text-center">
                  {/* Certificate Header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2ZM12 4.44L18.18 9.1L17.45 19.5L12 16.5L6.55 19.5L5.82 9.1L12 4.44Z"/>
                        <path d="M12 6L8.5 12L12 18L15.5 12L12 6Z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-2">Yoga Alliance</h3>
                    <p className="text-primary/80 font-semibold">REGISTERED YOGA SCHOOL</p>
                  </div>

                  {/* Certificate Body */}
                  <div className="border-t border-b border-primary/20 py-6 mb-6">
                    <h4 className="text-xl font-serif text-ivory-900 mb-2">YogaLife Rishikesh</h4>
                    <p className="text-ivory-700 mb-4">This certifies that the above named school is a</p>
                    <div className="bg-primary/5 rounded-lg p-4 mb-4">
                      <p className="text-primary font-bold text-lg">RYS 200 & RYS 300</p>
                      <p className="text-primary/80 text-sm">Registered Yoga School</p>
                    </div>
                    <p className="text-ivory-600 text-sm">Registration #YAS-12847</p>
                  </div>

                  {/* Certificate Footer */}
                  <div className="text-xs text-ivory-500">
                    <p>Valid from: January 2019</p>
                    <p>Location: Rishikesh, Uttarakhand, India</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/20"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/20"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/20"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/20"></div>
                </div>
              </div>
            </motion.div>

            {/* Certification Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-display text-ivory-900 mb-6">What This Means for You</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display text-ivory-900 mb-2">Global Recognition</h4>
                    <p className="text-ivory-700 font-light">Your certification is recognized and accepted by yoga studios worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display text-ivory-900 mb-2">Teaching Qualification</h4>
                    <p className="text-ivory-700 font-light">Qualified to teach yoga classes in any country that recognizes Yoga Alliance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display text-ivory-900 mb-2">Professional Standards</h4>
                    <p className="text-ivory-700 font-light">Training meets the highest international standards for yoga teacher education</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display text-ivory-900 mb-2">Continuing Education</h4>
                    <p className="text-ivory-700 font-light">Access to advanced training and continuing education opportunities</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <p className="text-primary font-semibold mb-2">Learn More About Yoga Alliance</p>
                <p className="text-primary/80 text-sm">
                  Yoga Alliance is the largest nonprofit association representing the yoga community, 
                  setting standards for yoga teacher training programs worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 