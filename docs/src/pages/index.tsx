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
    </Layout>
  )
}
