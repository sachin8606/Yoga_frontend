import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What makes your yoga school different from others?',
          answer: 'Our school is located in Rishikesh, the birthplace of yoga, offering authentic traditional teachings from experienced masters. We maintain small class sizes (maximum 15 students) for personalized attention and provide lifetime support to our graduates.'
        },
        {
          question: 'Do I need prior yoga experience to join the 200-hour course?',
          answer: 'No, the 200-hour course is designed for all levels, from complete beginners to experienced practitioners. Our teachers will guide you according to your individual level and help you progress safely.'
        },
        {
          question: 'What is the difference between 200-hour and 300-hour training?',
          answer: 'The 200-hour course is foundational training covering basics of yoga practice, philosophy, anatomy, and teaching methodology. The 300-hour is advanced training for those who have completed 200-hour certification, focusing on deeper practices, yoga therapy, and advanced teaching skills.'
        },
        {
          question: 'Are your certifications internationally recognized?',
          answer: 'Yes, all our programs are Yoga Alliance certified and recognized worldwide. You can teach anywhere in the world with our certification.'
        }
      ]
    },
    {
      title: 'Course Information',
      faqs: [
        {
          question: 'What is included in the course fee?',
          answer: 'The course fee includes accommodation, all meals (vegetarian), study materials, certification, yoga props, and unlimited access to all classes and workshops during your stay.'
        },
        {
          question: 'What is the daily schedule like?',
          answer: 'Days start at 6:00 AM with meditation, followed by pranayama, asana practice, breakfast, philosophy classes, lunch, anatomy/teaching practice, dinner, and evening meditation. The schedule is designed to give you a complete yogic lifestyle experience.'
        },
        {
          question: 'What style of yoga do you teach?',
          answer: 'We primarily teach traditional Hatha Yoga and Vinyasa Flow, along with pranayama, meditation, and yoga philosophy. Our approach is rooted in classical yoga traditions while incorporating modern teaching methods.'
        },
        {
          question: 'Can I join if I have physical limitations or injuries?',
          answer: 'Yes, yoga can be adapted for various physical conditions. Please inform us about any injuries or limitations during registration so our teachers can provide appropriate modifications and guidance.'
        }
      ]
    },
    {
      title: 'Accommodation & Facilities',
      faqs: [
        {
          question: 'What type of accommodation is provided?',
          answer: 'We offer clean, comfortable rooms in our traditional ashram setting. Rooms are simple but adequate with basic amenities including bed, storage, and shared bathrooms. Private rooms are available at additional cost.'
        },
        {
          question: 'What kind of food is served?',
          answer: 'We serve healthy, fresh vegetarian meals prepared with love and care. The food is yogic (sattvic) - pure, nourishing, and conducive to spiritual practice. We can accommodate dietary restrictions with advance notice.'
        },
        {
          question: 'Is WiFi available?',
          answer: 'Yes, WiFi is available in common areas. However, we encourage digital detox during your stay to fully immerse in the yogic experience.'
        },
        {
          question: 'What should I bring with me?',
          answer: 'Bring comfortable yoga clothes, a water bottle, notebook, personal toiletries, and any medications you need. Yoga mats and props are provided. A detailed packing list will be sent upon registration.'
        }
      ]
    },
    {
      title: 'Location & Travel',
      faqs: [
        {
          question: 'How do I get to Rishikesh?',
          answer: 'Fly to Delhi (DEL) airport, then take a bus, taxi, or train to Rishikesh (about 5-6 hours). Alternatively, fly to Dehradun airport (45 minutes from Rishikesh). We can arrange airport pickup for an additional fee.'
        },
        {
          question: 'Is Rishikesh safe for international travelers?',
          answer: 'Yes, Rishikesh is very safe and welcoming to international visitors. It\'s a spiritual town with a peaceful atmosphere. Our staff is always available to help with any concerns.'
        },
        {
          question: 'What is the weather like in Rishikesh?',
          answer: 'Rishikesh has a pleasant climate. Best months are October-April with mild temperatures. May-September can be warm and humid with monsoon rains. We recommend checking weather forecasts when planning your visit.'
        },
        {
          question: 'Do I need a visa to visit India?',
          answer: 'Most nationalities require a visa to enter India. Check with the Indian embassy in your country or apply for an e-visa online. Ensure your passport is valid for at least 6 months from your travel date.'
        }
      ]
    },
    {
      title: 'Registration & Payment',
      faqs: [
        {
          question: 'How do I register for a course?',
          answer: 'You can register through our contact form, email us directly, or WhatsApp us. We\'ll send you a registration form and payment instructions. A deposit is required to secure your spot.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'Cancellations made 30+ days before the course start date receive a full refund minus processing fees. Cancellations 15-30 days prior receive 50% refund. No refund for cancellations less than 15 days before the course.'
        },
        {
          question: 'Can I pay in installments?',
          answer: 'Yes, we offer payment plans. Typically, a deposit is required to secure your spot, with the balance due before the course starts. Contact us to arrange a payment schedule that works for you.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept bank transfers, PayPal, and cash payments upon arrival. Credit card payments can be arranged through PayPal. All major currencies are accepted.'
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="faqPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#faqPattern)" />
            </svg>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 text-6xl text-white opacity-20">❓</div>
          <div className="absolute bottom-20 left-20 text-5xl text-white opacity-20">💡</div>
        </div>
        
        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-light leading-relaxed">
              Find answers to common questions about our yoga teacher training programs, 
              accommodation, and the spiritual journey that awaits you in Rishikesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide text-ivory-900">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
              We've compiled answers to the most common questions about our programs. 
              If you don't find what you're looking for, please don't hesitate to contact us.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-primary text-white p-6">
                  <h3 className="text-2xl font-serif font-light">{category.title}</h3>
                </div>
                
                <div className="p-6">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    return (
                      <div key={faqIndex} className="border-b border-ivory-200 last:border-b-0">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors duration-300"
                        >
                          <h4 className="text-lg font-medium text-ivory-900 pr-4">
                            {faq.question}
                          </h4>
                          <div className={`text-2xl text-primary transition-transform duration-300 ${
                            openFAQ === globalIndex ? 'rotate-45' : ''
                          }`}>
                            +
                          </div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: openFAQ === globalIndex ? 'auto' : 0,
                            opacity: openFAQ === globalIndex ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6">
                            <p className="text-ivory-700 font-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
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
              Still Have Questions?
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Our team is here to help you on your yoga journey. 
              Reach out to us for personalized guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200 shadow-lg transform hover:scale-105 active:scale-95">
                  Contact Us
                </button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 transform hover:scale-105 active:scale-95">
                  WhatsApp Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 