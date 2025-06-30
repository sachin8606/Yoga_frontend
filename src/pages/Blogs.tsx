import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blogs = () => {
  // Helper function to get category gradient
  const getCategoryGradient = (category: string) => {
    const gradients = {
      'Philosophy': 'bg-gradient-to-br from-purple-500 to-purple-700',
      'Practice': 'bg-gradient-to-br from-green-500 to-green-700',
      'Experience': 'bg-gradient-to-br from-blue-500 to-blue-700',
      'Meditation': 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      'Training': 'bg-gradient-to-br from-orange-500 to-orange-700',
      'Ayurveda': 'bg-gradient-to-br from-emerald-500 to-emerald-700',
      'Anatomy': 'bg-gradient-to-br from-red-500 to-red-700',
      'Travel': 'bg-gradient-to-br from-cyan-500 to-cyan-700'
    };
    return gradients[category as keyof typeof gradients] || 'bg-gradient-to-br from-primary to-primary-dark';
  };

  // Helper function to get category icon
  const getCategoryIcon = (category: string) => {
    const icons = {
      'Philosophy': '🕉️',
      'Practice': '🧘',
      'Experience': '✨',
      'Meditation': '🧘‍♀️',
      'Training': '📚',
      'Ayurveda': '🌿',
      'Anatomy': '🫀',
      'Travel': '🏔️'
    };
    return icons[category as keyof typeof icons] || '📝';
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Sacred Journey: Understanding the Eight Limbs of Yoga',
      excerpt: 'Explore the profound wisdom of Patanjali\'s eight-limbed path and how it can transform your daily life beyond the yoga mat.',
      author: 'Swami Ananda',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'Philosophy',
      image: '/api/placeholder/400/250',
      slug: 'eight-limbs-of-yoga'
    },
    {
      id: 2,
      title: 'Pranayama: The Science of Breath and Life Force',
      excerpt: 'Discover the ancient breathing techniques that can enhance your physical health, mental clarity, and spiritual awareness.',
      author: 'Guru Priya',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Practice',
      image: '/api/placeholder/400/250',
      slug: 'pranayama-science-of-breath'
    },
    {
      id: 3,
      title: 'Living in Rishikesh: A Spiritual Awakening',
      excerpt: 'Experience the transformative power of studying yoga in the birthplace of this ancient practice, nestled in the Himalayan foothills.',
      author: 'Sarah Mitchell',
      date: 'March 5, 2024',
      readTime: '10 min read',
      category: 'Experience',
      image: '/api/placeholder/400/250',
      slug: 'living-in-rishikesh'
    },
    {
      id: 4,
      title: 'Meditation for Beginners: Finding Peace Within',
      excerpt: 'Simple yet powerful meditation techniques to help you start your journey toward inner peace and self-discovery.',
      author: 'Yogi Ramesh',
      date: 'February 28, 2024',
      readTime: '5 min read',
      category: 'Meditation',
      image: '/api/placeholder/400/250',
      slug: 'meditation-for-beginners'
    },
    {
      id: 5,
      title: 'Yoga Teacher Training: What to Expect',
      excerpt: 'A comprehensive guide to preparing for your yoga teacher training journey and making the most of this transformative experience.',
      author: 'Anita Sharma',
      date: 'February 20, 2024',
      readTime: '12 min read',
      category: 'Training',
      image: '/api/placeholder/400/250',
      slug: 'yoga-teacher-training-guide'
    },
    {
      id: 6,
      title: 'Ayurveda and Yoga: The Perfect Union',
      excerpt: 'Learn how these sister sciences work together to create balance and harmony in body, mind, and spirit.',
      author: 'Dr. Vikash Gupta',
      date: 'February 15, 2024',
      readTime: '9 min read',
      category: 'Ayurveda',
      image: '/api/placeholder/400/250',
      slug: 'ayurveda-and-yoga'
    },
    {
      id: 7,
      title: 'Sacred Mantras: The Power of Sound Healing',
      excerpt: 'Explore the ancient practice of mantra chanting and its profound effects on consciousness and well-being.',
      author: 'Swami Ananda',
      date: 'February 8, 2024',
      readTime: '7 min read',
      category: 'Philosophy',
      image: '/api/placeholder/400/250',
      slug: 'sacred-mantras-sound-healing'
    },
    {
      id: 8,
      title: 'Yoga Anatomy: Understanding Your Body',
      excerpt: 'Essential anatomical knowledge every yoga practitioner should know for safe and effective practice.',
      author: 'Dr. Priya Nair',
      date: 'January 30, 2024',
      readTime: '11 min read',
      category: 'Anatomy',
      image: '/api/placeholder/400/250',
      slug: 'yoga-anatomy-guide'
    },
    {
      id: 9,
      title: 'The Spiritual Heart of India: Rishikesh Guide',
      excerpt: 'Discover the sacred sites, ashrams, and spiritual practices that make Rishikesh the yoga capital of the world.',
      author: 'Rajesh Kumar',
      date: 'January 25, 2024',
      readTime: '15 min read',
      category: 'Travel',
      image: '/api/placeholder/400/250',
      slug: 'rishikesh-spiritual-guide'
    }
  ];

  const categories = ['All', 'Philosophy', 'Practice', 'Meditation', 'Training', 'Ayurveda', 'Experience', 'Anatomy', 'Travel'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="blogPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <circle cx="60" cy="60" r="40" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="60" cy="60" r="25" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="60" cy="60" r="10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blogPattern)" />
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
              Yoga Wisdom & Insights
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Explore ancient wisdom, modern insights, and transformative stories 
              from the world of yoga, meditation, and spiritual growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden">
                    <div className={`w-full h-48 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center ${getCategoryGradient(post.category)}`}>
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">{getCategoryIcon(post.category)}</div>
                        <div className="text-sm font-medium opacity-90">{post.category}</div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-serif text-ivory-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-ivory-700 font-light mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-ivory-600">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>{post.author}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide">
              Stay Connected with Wisdom
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Subscribe to our newsletter and receive weekly insights, practice tips, 
              and spiritual guidance directly to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 transform hover:scale-105 active:scale-95">
                  Subscribe
                </button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                Join 5,000+ yogis receiving our weekly wisdom
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 