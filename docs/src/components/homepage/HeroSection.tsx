import React, { useEffect, useRef, useState } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { HeroSVG } from '../../components/icon'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/Logo'
import { FrameworkRotation } from '@/components/FrameworkRotation'
import { Button } from '@/components/ui/button'

// Helper function for random values (can be placed outside or inside component)
const rnd = (min: number, max: number) => Math.random() * (max - min) + min

const HeroSection: React.FC = () => {
  const { siteConfig } = useDocusaurusContext()
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [seed, setSeed] = useState(Math.floor(rnd(1, 100))) // State for filter seed

  // Listen for theme changes
  useEffect(() => {
    // Check initial theme
    setIsDarkTheme(document.documentElement.dataset.theme === 'dark')

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          setIsDarkTheme(document.documentElement.dataset.theme === 'dark')
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-center" 
      style={{ minHeight: 'calc(100vh - var(--ifm-navbar-height))' }}>
      {/* Background Effects SVG Layer */}
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }} // Prevent SVG from intercepting mouse events
        preserveAspectRatio="xMidYMid slice" // Ensure it covers the area
      >
        <defs>
          {/* Improved Gradients for Effects */}
          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* Adjust colors based on theme */}
            <stop offset="0%" stopColor={isDarkTheme ? '#a5b4fc' : '#fcff83'} />
            <stop offset="100%" stopColor={isDarkTheme ? '#6366f1' : '#ffd6d6'} />
          </linearGradient>
          
          {/* Meteor gradients */}
          <linearGradient id="meteorGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isDarkTheme ? "#ff6b6b" : "#ff9d6b"} stopOpacity="0" />
            <stop offset="50%" stopColor={isDarkTheme ? "#ff9d6b" : "#ffca6b"} stopOpacity="1" />
            <stop offset="100%" stopColor={isDarkTheme ? "#ffc36b" : "#fff06b"} stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="meteorGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isDarkTheme ? "#6b73ff" : "#6be6ff"} stopOpacity="0" />
            <stop offset="50%" stopColor={isDarkTheme ? "#a56bff" : "#6bffdb"} stopOpacity="1" />
            <stop offset="100%" stopColor={isDarkTheme ? "#d96bff" : "#a2ff6b"} stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="meteorGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isDarkTheme ? "#e2e8f0" : "#e2e8f0"} stopOpacity="0" />
            <stop offset="50%" stopColor={isDarkTheme ? "#f8fafc" : "#ffffff"} stopOpacity="1" />
            <stop offset="100%" stopColor={isDarkTheme ? "#e2e8f0" : "#e2e8f0"} stopOpacity="0" />
          </linearGradient>

          {/* Fluid Effect Filter */}
          <filter id="fluidEffect" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.01" // Slower/larger waves
              numOctaves="2"
              seed={seed} // Use state for seed
              result="turbulenceResult"
            >
              <animate
                attributeName="baseFrequency"
                values="0.005 0.01; 0.007 0.012; 0.005 0.01"
                dur="20s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulenceResult"
              scale="15" // Lower scale for subtlety
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacementResult"
            />
             {/* Soften the displacement */}
             <feGaussianBlur in="displacementResult" stdDeviation="1" result="blurredDisplacement" />
             {/* Optional: Composite original back slightly for texture */}
             <feComposite operator="in" in="SourceGraphic" in2="blurredDisplacement" result="texturedFluid"/>
             <feMerge>
                <feMergeNode in="texturedFluid" />
             </feMerge>
          </filter>

          {/* Enhanced Glow Filter for Meteors/Particles */}
          <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Meteor tail filter */}
          <filter id="meteorTail" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

         {/* Apply Fluid Effect to a subtle background rectangle */}
         <rect width="100%" height="100%" fill={isDarkTheme ? "#1f2937" : "#e5e7eb"} opacity="0.1" filter="url(#fluidEffect)" />

        {/* Improved Shooting Stars/Meteors Layer */}
        <g id="meteors" opacity={isDarkTheme ? 0.9 : 0.6}>
          {Array.from({ length: 10 }).map((_, i) => {
            // Calculate unique properties for each meteor
            const size = rnd(1, 3.5);
            const duration = rnd(3, 8);
            const delay = rnd(0, 15);
            const startX = rnd(-20, 20);
            const startY = rnd(0, 100);
            const endX = rnd(100, 120);
            const endY = rnd(0, 100);
            const gradientIndex = i % 3 + 1; // Cycle through 3 gradients
            
            return (
              <g key={`meteor-${i}`} filter="url(#glowEffect)">
                {/* Meteor head (circle) */}
                <circle r={size} opacity="0">
                  <animate
                    attributeName="cx"
                    values={`${startX}%; ${endX}%`}
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${startY}%; ${endY}%`}
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0; 0.9; 0"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* Meteor tail (path) */}
                <path 
                  d={`M0,0 l-${20 + size * 10},0`} 
                  strokeWidth={size} 
                  strokeLinecap="round"
                  stroke={`url(#meteorGradient${gradientIndex})`}
                  opacity="0"
                  filter="url(#meteorTail)"
                >
                  <animate
                    attributeName="opacity"
                    values="0; 0.8; 0"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  
                  {/* Make the tail follow the meteor head */}
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`${startX}% ${startY}%; ${endX}% ${endY}%`}
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            );
          })}
        </g>

        {/* Enhanced Particle Effects Layer */}
        <g id="particles" filter="url(#glowEffect)" opacity={isDarkTheme ? 0.8 : 0.5}>
          {Array.from({ length: 60 }).map((_, i) => {
            // Classification of particles by size
            const isSmall = i < 40; // 40 small particles
            const isMedium = i >= 40 && i < 55; // 15 medium particles
            const isLarge = i >= 55; // 5 large particles
            
            // Size based on classification
            const size = isSmall 
              ? rnd(0.5, 1.2) 
              : isMedium 
                ? rnd(1.2, 2) 
                : rnd(2, 3.5);
                
            // Duration based on size (smaller particles move faster)
            const duration = isSmall 
              ? rnd(10, 20) 
              : isMedium 
                ? rnd(20, 30) 
                : rnd(30, 45);
                
            // Max opacity based on size
            const maxOpacity = isSmall 
              ? rnd(0.2, 0.4) 
              : isMedium 
                ? rnd(0.3, 0.6) 
                : rnd(0.5, 0.8);
            
            return (
              <circle
                key={`particle-${i}`}
                fill="url(#particleGradient)"
                r={size}
              >
                <animate
                  attributeName="cx"
                  // More controlled movement within screen boundaries
                  values={`${rnd(5, 95)}%; ${rnd(5, 95)}%; ${rnd(5, 95)}%`}
                  dur={`${duration}s`}
                  begin={`-${rnd(0, duration)}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  // Use percentages for responsiveness
                  values={`${rnd(5, 95)}%; ${rnd(5, 95)}%; ${rnd(5, 95)}%`}
                  dur={`${duration}s`}
                  begin={`-${rnd(0, duration)}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values={`0; ${maxOpacity}; 0`}
                  dur={`${duration * 0.7}s`} // Opacity changes more quickly than position
                  begin={`-${rnd(0, duration * 0.7)}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values={`${size * 0.8}; ${size * 1.2}; ${size * 0.8}`}
                  dur={`${rnd(5, 10)}s`}
                  begin={`-${rnd(0, 10)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      </svg>

      {/* Original Blur Backgrounds (kept for layered effect) */}
      <div className="absolute inset-0 z-1 opacity-20">
        <div className="absolute top-20 right-24 w-64 h-64 rounded-full bg-indigo-500 blur-3xl opacity-20"></div>
        <div className="absolute bottom-12 left-12 w-72 h-72 rounded-full bg-teal-500 blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-16"> { /* Ensure content is above SVG effects (z-10) */ }
        <div className="flex flex-col lg:flex-row items-center h-full">
          {/* Left side content remains the same */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8 reveal-item">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500 dark:from-indigo-400 dark:to-teal-300">
              LynKit
              <span className="block text-gray-900 dark:text-white">
                Beautiful UI Components
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              A modern React component library with beautiful design,
              accessibility features, and seamless integration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/docs/intro"
                className="px-8 py-4 hover:text-white text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600  text-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                Get Started
              </Link>

              <Link
                to="/docs/components"
                className="px-8 py-4 rounded-lg bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 text-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                Components
              </Link>
            </div>
          </div>

          {/* Right side SVG (now just the character) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end reveal-item">
            <HeroSVG />
          </div>
        </div>
      </div>

      {/* Custom CSS remains the same */}
      <style>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.9);
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-float {
          animation: float 6s infinite;
        }

        .animate-float-delay-1 {
          animation: float 6s infinite 1.5s;
        }

        .animate-float-delay-2 {
          animation: float 6s infinite 3s;
        }

        .animate-float-delay-3 {
          animation: float 6s infinite 4.5s;
        }

        .animate-pulse-delay-1 {
          animation: pulse 3s infinite 0.75s;
        }

        .animate-pulse-delay-2 {
          animation: pulse 3s infinite 1.5s;
        }

        .animate-pulse-delay-3 {
          animation: pulse 3s infinite 2.25s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .reveal-item {
          opacity: 0;
          transform: translateY(20px);
          animation: reveal 1s forwards;
        }

        @keyframes reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
