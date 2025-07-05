import { motion } from 'framer-motion';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  country: string;
  program: string;
  videoUrl: string;
  thumbnail: string;
  quote: string;
  rating: number;
  date: string;
}

const VideoTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'United States',
      program: '200 Hour YTT',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      quote: 'This training completely transformed my understanding of yoga. The teachers are incredible!',
      rating: 5,
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Marco Rodriguez',
      country: 'Spain',
      program: '300 Hour YTT',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      quote: 'The spiritual atmosphere of Rishikesh combined with authentic teachings made this unforgettable.',
      rating: 5,
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Emma Chen',
      country: 'Australia',
      program: '200 Hour YTT',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      quote: 'I came as a beginner and left as a confident teacher. The support here is amazing!',
      rating: 5,
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'Jean-Pierre Dubois',
      country: 'France',
      program: '300 Hour YTT',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      quote: 'The philosophy classes and meditation sessions deepened my practice beyond what I imagined.',
      rating: 5,
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'Priya Sharma',
      country: 'Canada',
      program: '200 Hour YTT',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      quote: 'Learning yoga in its birthplace was a dream come true. The energy here is magical!',
      rating: 5,
      date: 'November 2023'
    },
    {
      id: 6,
      name: 'David Wilson',
      country: 'United Kingdom',
      program: '300 Hour YTT',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      quote: 'The combination of traditional wisdom and modern teaching methods is perfect.',
      rating: 5,
      date: 'October 2023'
    }
  ];

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-primary pt-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="testimonialPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonialPattern)" />
          </svg>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 hidden sm:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-20 right-8 md:right-20 text-4xl md:text-5xl text-white"
          >
            🎥
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-32 left-8 md:left-16 text-4xl md:text-5xl text-white"
          >
            ⭐
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="absolute top-32 left-8 md:left-20 text-3xl md:text-4xl text-white"
          >
            💬
          </motion.div>
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 tracking-wide">
              Student
              <span className="block text-accent font-normal">Testimonials</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Hear directly from our graduates about their transformative journey at our yoga school in Rishikesh. 
              These authentic stories showcase the profound impact of our training programs.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">500+</div>
                <div className="text-xs md:text-sm opacity-80">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">50+</div>
                <div className="text-xs md:text-sm opacity-80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">5⭐</div>
                <div className="text-xs md:text-sm opacity-80">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">100%</div>
                <div className="text-xs md:text-sm opacity-80">Recommended</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Grid */}
      <section className="py-16 md:py-20 bg-ivory-50 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
              Real Stories, Real Transformations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              Watch our students share their authentic experiences and the profound changes they've experienced 
              through our yoga teacher training programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => openModal(testimonial)}
              >
                {/* Video Thumbnail */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name} testimonial`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.program}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-ivory-600">{testimonial.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif mb-2 text-ivory-900">{testimonial.name}</h3>
                  <p className="text-primary font-medium mb-3 text-sm">{testimonial.country}</p>
                  
                  <p className="text-ivory-700 font-light leading-relaxed italic text-sm md:text-base line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="mt-4 flex items-center text-primary font-medium text-sm hover:text-primary-dark transition-colors">
                    <span>Watch Video</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-primary text-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 tracking-wide">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-95 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Join hundreds of students who have transformed their lives through our authentic yoga teacher training programs. 
              Your transformation story could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8 relative"
          >
            {/* Close Button - Make it more prominent and fixed position */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 pt-12">
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-ivory-900 mb-2">{selectedTestimonial.name}</h3>
                <p className="text-primary font-medium">{selectedTestimonial.country} • {selectedTestimonial.program}</p>
                <div className="flex items-center mt-2">
                  <div className="flex space-x-1 mr-3">
                    {renderStars(selectedTestimonial.rating)}
                  </div>
                  <span className="text-sm text-ivory-600">{selectedTestimonial.date}</span>
                </div>
              </div>
              
              <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                <iframe
                  src={selectedTestimonial.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  title={`${selectedTestimonial.name} testimonial`}
                />
              </div>
              
              <p className="text-ivory-700 font-light leading-relaxed italic text-lg">
                "{selectedTestimonial.quote}"
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default VideoTestimonials;