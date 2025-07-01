import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PathStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  position: { x: number; y: number };
  connections: string[];
  type: 'start' | 'decision' | 'milestone' | 'destination';
  options?: {
    left?: { text: string; nextStep: string };
    right?: { text: string; nextStep: string };
  };
}

const HowToReach = () => {
  const [selectedPath, setSelectedPath] = useState<string[]>(['start']);
  const [currentStep, setCurrentStep] = useState('start');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set(['start']));
  const svgRef = useRef<SVGSVGElement>(null);

  const pathSteps: Record<string, PathStep> = {
    start: {
      id: 'start',
      title: 'Your Journey Begins',
      description: 'Choose your starting point to reach our sacred yoga ashram in Rishikesh',
      icon: '🏠',
      position: { x: 100, y: 400 },
      connections: ['transport'],
      type: 'start'
    },
    transport: {
      id: 'transport',
      title: 'Choose Transportation',
      description: 'How would you like to travel to Rishikesh?',
      icon: '🚗',
      position: { x: 300, y: 400 },
      connections: ['flight', 'train'],
      type: 'decision',
      options: {
        left: { text: 'By Flight', nextStep: 'flight' },
        right: { text: 'By Train/Bus', nextStep: 'train' }
      }
    },
    flight: {
      id: 'flight',
      title: 'Fly to Dehradun',
      description: 'Jolly Grant Airport (DED) is the nearest airport, 35km from Rishikesh',
      icon: '✈️',
      position: { x: 250, y: 250 },
      connections: ['taxi-from-airport'],
      type: 'milestone'
    },
    train: {
      id: 'train',
      title: 'Train to Haridwar',
      description: 'Take train to Haridwar Junction, then bus/taxi to Rishikesh (25km)',
      icon: '🚂',
      position: { x: 350, y: 550 },
      connections: ['local-transport'],
      type: 'milestone'
    },
    'taxi-from-airport': {
      id: 'taxi-from-airport',
      title: 'Airport to Rishikesh',
      description: 'Take a taxi or pre-booked cab from airport',
      icon: '🚕',
      position: { x: 450, y: 200 },
      connections: ['rishikesh-entry'],
      type: 'milestone'
    },
    'local-transport': {
      id: 'local-transport',
      title: 'Local Transport Options',
      description: 'Choose between shared taxi, bus, or private cab',
      icon: '🚌',
      position: { x: 500, y: 550 },
      connections: ['rishikesh-entry'],
      type: 'decision',
      options: {
        left: { text: 'Shared Transport', nextStep: 'rishikesh-entry' },
        right: { text: 'Private Cab', nextStep: 'rishikesh-entry' }
      }
    },
    'rishikesh-entry': {
      id: 'rishikesh-entry',
      title: 'Welcome to Rishikesh',
      description: 'You have reached the yoga capital of the world!',
      icon: '🕉️',
      position: { x: 650, y: 350 },
      connections: ['area-choice'],
      type: 'milestone'
    },
    'area-choice': {
      id: 'area-choice',
      title: 'Navigate Rishikesh',
      description: 'Choose your route to reach Tapovan area',
      icon: '🗺️',
      position: { x: 800, y: 350 },
      connections: ['lakshman-jhula', 'ram-jhula'],
      type: 'decision',
      options: {
        left: { text: 'Via Laxman Jhula', nextStep: 'lakshman-jhula' },
        right: { text: 'Via Ram Jhula', nextStep: 'ram-jhula' }
      }
    },
    'lakshman-jhula': {
      id: 'lakshman-jhula',
      title: 'Cross Laxman Jhula',
      description: 'Walk across the iconic suspension bridge over Ganges',
      icon: '🌉',
      position: { x: 750, y: 200 },
      connections: ['tapovan'],
      type: 'milestone'
    },
    'ram-jhula': {
      id: 'ram-jhula',
      title: 'Cross Ram Jhula',
      description: 'Take the alternative route via Ram Jhula bridge',
      icon: '🌉',
      position: { x: 850, y: 500 },
      connections: ['tapovan'],
      type: 'milestone'
    },
    tapovan: {
      id: 'tapovan',
      title: 'Sacred Yoga Ashram',
      description: 'Welcome to our peaceful ashram in Tapovan! Your yoga journey begins here.',
      icon: '🏛️',
      position: { x: 1000, y: 350 },
      connections: [],
      type: 'destination'
    }
  };

  const handleStepSelect = (stepId: string) => {
    const step = pathSteps[stepId];
    if (!step) return;

    setCurrentStep(stepId);
    
    if (!selectedPath.includes(stepId)) {
      setSelectedPath(prev => [...prev, stepId]);
    }
    
    setCompletedSteps(prev => new Set([...prev, stepId]));
  };

  const handleDirectionChoice = (nextStepId: string) => {
    const newPath = [...selectedPath, nextStepId];
    setSelectedPath(newPath);
    setCurrentStep(nextStepId);
    setCompletedSteps(prev => new Set([...prev, nextStepId]));
  };

  const resetJourney = () => {
    setSelectedPath(['start']);
    setCurrentStep('start');
    setCompletedSteps(new Set(['start']));
  };

  const currentStepData = pathSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 pt-20">
      {/* Header */}
      <div className="container-custom py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-display text-primary mb-4"
        >
          Path to Sacred Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-ivory-700 max-w-2xl mx-auto leading-relaxed"
        >
          Discover the beautiful pathways to reach our yoga ashram in the mystical city of Rishikesh
        </motion.p>
      </div>

      {/* Interactive Journey Layout */}
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Journey Map - Left/Center */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-display text-primary">Your Journey Map</h2>
                <motion.button
                  onClick={resetJourney}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors flex-shrink-0 text-sm"
                >
                  Reset 🔄
                </motion.button>
              </div>

              {/* SVG Journey Map */}
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-4 overflow-x-auto">
                <svg
                  ref={svgRef}
                  viewBox="0 0 1200 700"
                  className="w-full h-80 lg:h-96"
                  style={{ minWidth: '600px' }}
                >
                  {/* Draw connections between steps */}
                  {Object.values(pathSteps).map(step => 
                    step.connections.map(connectionId => {
                      const connectedStep = pathSteps[connectionId];
                      if (!connectedStep) return null;
                      
                      const isActive = selectedPath.includes(step.id) && selectedPath.includes(connectionId);
                      const isCompleted = completedSteps.has(step.id) && completedSteps.has(connectionId);
                      
                      return (
                        <motion.line
                          key={`${step.id}-${connectionId}`}
                          x1={step.position.x}
                          y1={step.position.y}
                          x2={connectedStep.position.x}
                          y2={connectedStep.position.y}
                          stroke={isActive ? "#8B5CF6" : isCompleted ? "#10B981" : "#E5E7EB"}
                          strokeWidth={isActive ? "4" : "2"}
                          strokeDasharray={isActive ? "10,5" : "none"}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: isCompleted ? 1 : 0 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      );
                    })
                  )}

                  {/* Draw step nodes */}
                  {Object.values(pathSteps).map(step => {
                    const isActive = currentStep === step.id;
                    const isCompleted = completedSteps.has(step.id);
                    const isVisited = selectedPath.includes(step.id);
                    
                    return (
                      <g key={step.id}>
                                            {/* Step circle */}
                    <motion.circle
                      cx={step.position.x}
                      cy={step.position.y}
                      r={isActive ? "45" : "35"}
                      fill={
                        step.type === 'destination' ? "#10B981" :
                        step.type === 'start' ? "#8B5CF6" :
                        isActive ? "#F59E0B" :
                        isCompleted ? "#10B981" :
                        "#E5E7EB"
                      }
                      stroke={isActive ? "#F59E0B" : "white"}
                      strokeWidth="4"
                      className="cursor-pointer drop-shadow-lg"
                      onClick={() => handleStepSelect(step.id)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                    
                    {/* Step icon */}
                    <text
                      x={step.position.x}
                      y={step.position.y + 12}
                      textAnchor="middle"
                      fontSize={isActive ? "36" : "28"}
                      className="pointer-events-none select-none"
                    >
                      {step.icon}
                    </text>
                    
                    {/* Step label */}
                    <text
                      x={step.position.x}
                      y={step.position.y + 60}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#374151"
                      className="pointer-events-none select-none font-semibold"
                      style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                    >
                      {step.title}
                    </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Current Step Details - Right Sidebar */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sticky top-24"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{currentStepData.icon}</div>
                  <h3 className="text-xl font-display text-primary mb-3">{currentStepData.title}</h3>
                  <p className="text-sm text-ivory-700 leading-relaxed">
                    {currentStepData.description}
                  </p>
                </div>

                {/* Decision Options */}
                {currentStepData.options && (
                  <div className="space-y-3">
                    {currentStepData.options.left && (
                      <motion.button
                        onClick={() => handleDirectionChoice(currentStepData.options!.left!.nextStep)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium"
                      >
                        <span className="text-lg mr-2">👈</span>
                        {currentStepData.options.left.text}
                      </motion.button>
                    )}
                    
                    {currentStepData.options.right && (
                      <motion.button
                        onClick={() => handleDirectionChoice(currentStepData.options!.right!.nextStep)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium"
                      >
                        {currentStepData.options.right.text}
                        <span className="text-lg ml-2">👉</span>
                      </motion.button>
                    )}
                  </div>
                )}

                {/* Next Steps for non-decision points */}
                {!currentStepData.options && currentStepData.connections.length > 0 && (
                  <div className="text-center">
                    <motion.button
                      onClick={() => handleDirectionChoice(currentStepData.connections[0])}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium"
                    >
                      Continue Journey →
                    </motion.button>
                  </div>
                )}

                {/* Destination reached */}
                {currentStepData.type === 'destination' && (
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.8 }}
                      className="px-4 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full shadow-lg text-sm font-medium"
                    >
                      🎉 Journey Complete! 🎉
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-display text-primary mb-4 flex items-center">
              <span className="text-3xl mr-3">📍</span>
              Location Details
            </h3>
            <div className="space-y-3 text-ivory-700">
              <p><strong>Address:</strong> Sacred Yoga Ashram, Tapovan, Rishikesh, Uttarakhand 249192</p>
              <p><strong>Coordinates:</strong> 30.1367° N, 78.2996° E</p>
              <p><strong>Altitude:</strong> 372 meters above sea level</p>
              <p><strong>Distance from Ganges:</strong> 200 meters</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-display text-primary mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Travel Tips
            </h3>
            <ul className="space-y-2 text-ivory-700">
              <li>• Best time to visit: March-April, September-November</li>
              <li>• Carry warm clothes for evening meditation</li>
              <li>• Keep some cash for local transport</li>
              <li>• Download offline maps for better navigation</li>
              <li>• Pre-book accommodation during peak season</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowToReach; 