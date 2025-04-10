import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import '../css/custom.css'
import '../css/home.css'

// Import homepage components
import HeroSection from '../components/homepage/HeroSection'
import FeaturesSection from '../components/homepage/FeaturesSection'
import TestimonialsSection from '../components/homepage/TestimonialsSection'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  // Add scroll reveal animation
  React.useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-item')

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight

      revealItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top
        if (itemTop < windowHeight - 100) {
          item.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    // Initial check
    revealOnScroll()

    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  return (
    <Layout
      title={siteConfig.title}
      description="Modern React Component Library"
    >
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-700 dark:to-indigo-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Amazing UIs?
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Start using LynKit today and transform your development experience
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/docs/intro"
              className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-md"
            >
              Get Started
            </a>
            <a
              href="https://github.com/your-org/lynkit"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-400 blur-3xl opacity-30"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-300 blur-3xl opacity-30"></div>
        </div>
      </section>
    </Layout>
  )
}
