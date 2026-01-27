import React, { useEffect, useState } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { HeroSVG } from '../../components/icon'


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
