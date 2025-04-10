import React, { useEffect, useRef, useState } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const HeroSection: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const { siteConfig } = useDocusaurusContext()
  const [isDarkTheme, setIsDarkTheme] = useState(
    document.documentElement.dataset.theme === 'dark',
  )

  // 监听颜色模式变化
  useEffect(() => {
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

  // 动画效果
  useEffect(() => {
    const circles = svgRef.current?.querySelectorAll('circle')
    const paths = svgRef.current?.querySelectorAll('path')

    if (circles) {
      circles.forEach((circle, index) => {
        circle.style.animation = `pulse 3s infinite ${index * 0.2}s`
      })
    }

    if (paths) {
      paths.forEach((path, index) => {
        path.style.animation = `dash 4s infinite ${index * 0.3}s ease-in-out`
      })
    }
  }, [])

  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 pb-24 md:pt-24 md:pb-32">
      {/* 背景图案 */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-24 w-64 h-64 rounded-full bg-indigo-500 blur-3xl opacity-20"></div>
        <div className="absolute bottom-12 left-12 w-72 h-72 rounded-full bg-teal-500 blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* 左侧内容 */}
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
                to="/docs/introduction"
                className="px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
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

          {/* 右侧SVG动画 */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end reveal-item">
            <svg
              ref={svgRef}
              width="500"
              height="500"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hero-svg w-full max-w-md lg:max-w-lg"
            >
              {/* SVG线条和形状 */}
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={isDarkTheme ? '#6366f1' : '#4f46e5'}
                  />
                  <stop
                    offset="100%"
                    stopColor={isDarkTheme ? '#14b8a6' : '#0d9488'}
                  />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 中心图形 */}
              <g className="central-elements" filter="url(#glow)">
                <circle
                  cx="300"
                  cy="300"
                  r="60"
                  fill="url(#gradient1)"
                  opacity="0.9"
                />
                <circle
                  cx="300"
                  cy="300"
                  r="100"
                  stroke="url(#gradient1)"
                  strokeWidth="4"
                  strokeDasharray="628"
                  strokeDashoffset="628"
                  opacity="0.7"
                />
                <circle
                  cx="300"
                  cy="300"
                  r="140"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  strokeDasharray="879"
                  strokeDashoffset="879"
                  opacity="0.5"
                />
                <circle
                  cx="300"
                  cy="300"
                  r="180"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="1130"
                  strokeDashoffset="1130"
                  opacity="0.3"
                />
              </g>

              {/* 浮动元素 */}
              <g className="floating-elements">
                {/* 组件图标 */}
                <rect
                  x="150"
                  y="140"
                  width="50"
                  height="50"
                  rx="10"
                  fill="url(#gradient1)"
                  opacity="0.8"
                  className="animate-float"
                />
                <rect
                  x="400"
                  y="140"
                  width="50"
                  height="50"
                  rx="25"
                  fill="url(#gradient1)"
                  opacity="0.8"
                  className="animate-float-delay-1"
                />
                <rect
                  x="150"
                  y="400"
                  width="50"
                  height="50"
                  rx="10"
                  fill="url(#gradient1)"
                  opacity="0.8"
                  className="animate-float-delay-2"
                />
                <rect
                  x="400"
                  y="400"
                  width="50"
                  height="50"
                  rx="25"
                  fill="url(#gradient1)"
                  opacity="0.8"
                  className="animate-float-delay-3"
                />

                {/* 连接线 */}
                <path
                  d="M300 240 L300 360"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  strokeDasharray="120"
                  strokeDashoffset="120"
                  opacity="0.6"
                />
                <path
                  d="M240 300 L360 300"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  strokeDasharray="120"
                  strokeDashoffset="120"
                  opacity="0.6"
                />
                <path
                  d="M200 200 L400 400"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  opacity="0.5"
                />
                <path
                  d="M400 200 L200 400"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  opacity="0.5"
                />

                {/* 额外装饰元素 */}
                <circle
                  cx="200"
                  cy="200"
                  r="15"
                  fill="url(#gradient1)"
                  opacity="0.9"
                  className="animate-pulse"
                />
                <circle
                  cx="400"
                  cy="200"
                  r="15"
                  fill="url(#gradient1)"
                  opacity="0.9"
                  className="animate-pulse-delay-1"
                />
                <circle
                  cx="200"
                  cy="400"
                  r="15"
                  fill="url(#gradient1)"
                  opacity="0.9"
                  className="animate-pulse-delay-2"
                />
                <circle
                  cx="400"
                  cy="400"
                  r="15"
                  fill="url(#gradient1)"
                  opacity="0.9"
                  className="animate-pulse-delay-3"
                />
              </g>

              {/* 装饰点 */}
              <g className="decoration-dots">
                {[...Array(20)].map((_, i) => (
                  <circle
                    key={i}
                    cx={300 + 220 * Math.cos((2 * Math.PI * i) / 20)}
                    cy={300 + 220 * Math.sin((2 * Math.PI * i) / 20)}
                    r="4"
                    fill="url(#gradient1)"
                    opacity="0.6"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* 自定义CSS */}
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
