import { motion } from 'framer-motion';
import YogaLogo from '../components/YogaLogo';

const LogoShowcase = () => {
  return (
    <div className="pt-20 pb-20 bg-ivory-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6 text-ivory-900 tracking-wide">
            YogaLife Logo Showcase
          </h1>
          <p className="text-xl text-ivory-700 max-w-3xl mx-auto font-light">
            Our beautiful yoga logo combines traditional elements with modern design, 
            featuring lotus petals, Om symbol, and elegant typography.
          </p>
        </motion.div>

        {/* Size Variations */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-light text-ivory-900 mb-8 text-center">
            Size Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-lg font-serif mb-4 text-ivory-900">Small</h3>
              <div className="flex justify-center">
                <YogaLogo size="sm" variant="primary" showText={true} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-lg font-serif mb-4 text-ivory-900">Medium</h3>
              <div className="flex justify-center">
                <YogaLogo size="md" variant="primary" showText={true} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-lg font-serif mb-4 text-ivory-900">Large</h3>
              <div className="flex justify-center">
                <YogaLogo size="lg" variant="primary" showText={true} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-lg font-serif mb-4 text-ivory-900">Extra Large</h3>
              <div className="flex justify-center">
                <YogaLogo size="xl" variant="primary" showText={true} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Color Variations */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-light text-ivory-900 mb-8 text-center">
            Color Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-lg font-serif mb-4 text-ivory-900">Primary</h3>
              <div className="flex justify-center">
                <YogaLogo size="lg" variant="primary" showText={true} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-lg font-serif mb-4 text-white">Light (On Dark)</h3>
              <div className="flex justify-center">
                <YogaLogo size="lg" variant="light" showText={true} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-ivory-200 p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-lg font-serif mb-4 text-ivory-900">Dark</h3>
              <div className="flex justify-center">
                <YogaLogo size="lg" variant="dark" showText={true} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Icon Only Variations */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-light text-ivory-900 mb-8 text-center">
            Icon Only
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-sm font-serif mb-4 text-ivory-900">Small Icon</h3>
              <div className="flex justify-center">
                <YogaLogo size="sm" variant="primary" showText={false} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-sm font-serif mb-4 text-ivory-900">Medium Icon</h3>
              <div className="flex justify-center">
                <YogaLogo size="md" variant="primary" showText={false} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-sm font-serif mb-4 text-ivory-900">Large Icon</h3>
              <div className="flex justify-center">
                <YogaLogo size="lg" variant="primary" showText={false} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-sm font-serif mb-4 text-ivory-900">XL Icon</h3>
              <div className="flex justify-center">
                <YogaLogo size="xl" variant="primary" showText={false} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Logo */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 p-16 rounded-3xl"
          >
            <h2 className="text-3xl font-serif font-light text-ivory-900 mb-8">
              Hero Logo
            </h2>
            <div className="flex justify-center">
              <YogaLogo 
                size="xl" 
                variant="primary" 
                showText={true} 
                className="transform scale-150" 
              />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default LogoShowcase; 