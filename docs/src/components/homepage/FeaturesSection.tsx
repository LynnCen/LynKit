import React from 'react'
import Link from '@docusaurus/Link'

type FeatureCardProps = {
  title: string
  description: string
  icon: React.ReactNode
  linkTo: string
  linkText: string
  color: string
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  linkTo,
  linkText,
  color,
  index,
}) => {
  const animationDelay = `${index * 0.15}s`

  return (
    <div
      className={`feature-card reveal-item relative rounded-xl p-6 md:p-8 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 ${color} md:flex items-start gap-6`}
      style={{ animationDelay }}
    >
      <div className="feature-icon-wrapper mb-4 md:mb-0 md:mt-1">
        <div
          className={`feature-icon w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full ${color.replace('border-', 'bg-').replace('-600', '-100 dark:bg-gray-700')}`}
        >
          {icon}
        </div>
      </div>

      <div className="feature-content flex-1">
        <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
        <Link
          to={linkTo}
          className={`inline-flex items-center font-medium ${color.replace('border-', 'text-').replace('-600', '-500 dark:text-indigo-400')} hover:underline`}
        >
          {linkText}
          <svg
            className="w-5 h-5 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="glow-effect absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"></div>
    </div>
  )
}

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Tools for Modern Development
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            LynKit provides everything you need to build beautiful, responsive,
            and accessible applications
          </p>
        </div>

        <div className="features-grid space-y-8 md:space-y-12">
          {/* UI Components */}
          <FeatureCard
            title="UI Components"
            description="A collection of beautifully designed UI components built with Tailwind CSS. Each component is fully accessible, customizable, and responsive out of the box."
            icon={
              <svg
                className="w-8 h-8 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            }
            linkTo="/docs/components"
            linkText="Browse UI Components"
            color="border-indigo-600"
            index={0}
          />

          {/* Hooks */}
          <FeatureCard
            title="Custom Hooks"
            description="Powerful, reusable React hooks that handle common patterns like form validation, animations, data fetching, and more to simplify your development workflow."
            icon={
              <svg
                className="w-8 h-8 text-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            linkTo="/docs/hooks"
            linkText="Explore Hooks"
            color="border-purple-600"
            index={1}
          />

          {/* API Tools */}
          <FeatureCard
            title="API Tools"
            description="Utilities for handling API requests, error handling, caching, and data transformation. Simplify your data management with our elegant abstractions."
            icon={
              <svg
                className="w-8 h-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            linkTo="/docs/api"
            linkText="View API Tools"
            color="border-blue-600"
            index={2}
          />

          {/* Icons */}
          <FeatureCard
            title="Icon System"
            description="A comprehensive set of icons designed for modern web applications. Available as React components or font icons, fully customizable and optimized for performance."
            icon={
              <svg
                className="w-8 h-8 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            linkTo="/docs/icons"
            linkText="Browse Icons"
            color="border-green-600"
            index={3}
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
