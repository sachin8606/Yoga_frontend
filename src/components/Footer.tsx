import { motion } from 'framer-motion';
import YogaLogo from './YogaLogo';

const Footer = () => {

  const footerLinks = [
    {
      title: 'Courses',
      links: [
        { name: '200 Hour YTT', url: '/courses' },
        { name: '300 Hour YTT', url: '/courses' },
        { name: 'Meditation Intensive', url: '/courses' },
        { name: 'Workshops', url: '/workshops' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', url: '/about' },
        { name: 'Teachers', url: '/about' },
        { name: 'Sacred Location', url: '/about' },
        { name: 'Philosophy', url: '/about' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'FAQ', url: '/faq' },
        { name: 'Accommodation', url: '/accommodation' },
        { name: 'How to Reach', url: '/how-to-reach' },
        { name: 'Contact Us', url: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-ivory-100 pt-16 pb-8 border-t border-ivory-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <YogaLogo size="lg" variant="primary" showText={true} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-ivory-700 mb-6 font-light leading-relaxed"
            >
              Sacred Yoga Ashram<br />
              Tapovan, Rishikesh<br />
              Uttarakhand, India 249192<br />
              Phone: +91 98765 43210<br />
              Email: info@yogalife-rishikesh.com
            </motion.p>
            <div className="flex space-x-4">
             
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-display font-medium mb-4 text-ivory-900">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-ivory-600 hover:text-primary transition-colors duration-300 font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8 border-y border-ivory-200"
        >
          <p className="text-ivory-700 font-light italic text-lg mb-2">
            "Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame."
          </p>
          <p className="text-ivory-600 text-sm">- B.K.S. Iyengar</p>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-ivory-600 text-sm mb-4 md:mb-0 font-light">
              © {new Date().getFullYear()} YogaLife Rishikesh. All rights reserved. Made with 🤍 for yoga practitioners worldwide.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-ivory-600 hover:text-primary text-sm transition-colors duration-300 font-light">
                Privacy Policy
              </a>
              <a href="/terms" className="text-ivory-600 hover:text-primary text-sm transition-colors duration-300 font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 