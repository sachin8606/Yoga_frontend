import { motion } from 'framer-motion';

interface YogaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'light' | 'dark' | 'primary';
  showText?: boolean;
  className?: string;
}

const YogaLogo = ({ 
  size = 'md', 
  variant = 'primary', 
  showText = true, 
  className = '' 
}: YogaLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    xxl: 'w-32 h-32'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl',
    xxl: 'text-5xl'
  };

  const spacingClasses = {
    sm: 'space-x-2',
    md: 'space-x-3',
    lg: 'space-x-4',
    xl: 'space-x-5',
    xxl: 'space-x-6'
  };

  const colorVariants = {
    light: {
      primary: '#FFFEF7',
      secondary: '#E8DCC6',
      accent: '#D4C4A8',
      text: '#FFFEF7'
    },
    dark: {
      primary: '#8B7355',
      secondary: '#6B5B42',
      accent: '#D4C4A8',
      text: '#3C3530'
    },
    primary: {
      primary: '#8B7355',
      secondary: '#D4C4A8',
      accent: '#E8DCC6',
      text: '#8B7355'
    }
  };

  const colors = colorVariants[variant];

  return (
    <motion.div 
      className={`flex items-center ${spacingClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo Icon */}
      <motion.div
        className={`relative ${sizeClasses[size]} flex-shrink-0`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <radialGradient id="lotusGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={colors.accent} />
              <stop offset="100%" stopColor={colors.primary} />
            </radialGradient>
            <linearGradient id="omGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Outer Lotus Petals - Enhanced */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '50px 50px' }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.ellipse
                key={i}
                cx="50"
                cy="18"
                rx="4"
                ry="18"
                fill="url(#lotusGradient)"
                opacity="0.8"
                transform={`rotate(${i * 45} 50 50)`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                filter="url(#glow)"
              />
            ))}
          </motion.g>

          {/* Inner Lotus Petals - Enhanced */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '50px 50px' }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.ellipse
                key={i}
                cx="50"
                cy="28"
                rx="3"
                ry="14"
                fill={colors.secondary}
                opacity="0.9"
                transform={`rotate(${i * 60} 50 50)`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </motion.g>

          {/* Center Circle (Om Base) - Enhanced */}
          <motion.circle
            cx="50"
            cy="50"
            r="14"
            fill="url(#omGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            filter="url(#glow)"
          />

          {/* Om Symbol - Enhanced */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="18"
              fontFamily="serif"
              fill={variant === 'light' ? colors.text : '#FFFEF7'}
              fontWeight="bold"
              filter="url(#glow)"
            >
              ॐ
            </text>
          </motion.g>

          {/* Decorative Dots - Enhanced */}
          {[...Array(4)].map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + Math.cos((i * Math.PI) / 2) * 28}
              cy={50 + Math.sin((i * Math.PI) / 2) * 28}
              r="2"
              fill={colors.accent}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Logo Text - Enhanced */}
      {showText && (
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span
            className={`font-serif font-bold tracking-wide leading-none ${textSizes[size]} drop-shadow-sm`}
            style={{ color: colors.text }}
          >
            YogaLife
          </span>
          <span
            className={`font-light tracking-widest opacity-80 ${
              size === 'xxl' ? 'text-base' : 
              size === 'xl' ? 'text-sm' : 
              size === 'lg' ? 'text-xs' : 'text-xs'
            }`}
            style={{ color: colors.text }}
          >
            RISHIKESH
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default YogaLogo; 