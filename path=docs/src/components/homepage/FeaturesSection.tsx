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
    <Link
      to={linkTo}
      className="feature-card-link block"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        className={`feature-card reveal-item relative rounded-xl p-6 md:p-8 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 ${color} md:flex items-start gap-6 cursor-pointer overflow-hidden group transform hover:-translate-y-1`}
        style={{ animationDelay }}
      >
        <div className="feature-icon-wrapper mb-4 md:mb-0 md:mt-1 relative z-10">
          <div
            className={`feature-icon w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full ${color.replace('border-', 'bg-').replace('-600', '-100 dark:bg-gray-700')} transition-all duration-500 group-hover:scale-110`}
          >
            {icon}
          </div>
        </div>

        <div className="feature-content flex-1 relative z-10">
          <h3 className="text-xl md:text-2xl font-bold mb-3 transform transition-transform duration-500 group-hover:translate-x-1">
            {title}
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
          <span
            className={`inline-flex items-center font-medium ${color.replace('border-', 'text-').replace('-600', '-500 dark:text-indigo-400')} group-hover:underline`}
          >
            {linkText}
            <svg
              className="w-5 h-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
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
          </span>
        </div>

        {/* 闪光效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-0"></div>

        {/* 边框动画 */}
        <div
          className="absolute inset-0 border border-transparent group-hover:border-current opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-500 z-0"
          style={{
            borderColor: color.replace('border-', '').replace('-600', ''),
          }}
        ></div>

        {/* 背景装饰 */}
        <div
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10 bg-current transform scale-0 group-hover:scale-100 transition-transform duration-700 z-0"
          style={{ color: color.replace('border-', '').replace('-600', '') }}
        ></div>
      </div>
    </Link>
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
              <img
                src="/img/ui-components.svg"
                alt="UI Components"
                className="w-8 h-8"
              />
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
            icon={<img src="/img/hooks.svg" alt="Hooks" className="w-8 h-8" />}
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
              <img
                src="/img/api-tools.svg"
                alt="API Tools"
                className="w-8 h-8"
              />
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
            icon={<img src="/img/icons.svg" alt="Icons" className="w-8 h-8" />}
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
