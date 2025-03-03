import * as React from 'react'
import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.title} description="轻量级 React 组件库">
      <header className="hero">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="hero__title mb-6">{siteConfig.title}</h1>
          <p className="hero__subtitle mb-12">{siteConfig.tagline}</p>

          <div className="flex justify-center gap-6">
            <Link
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              to="/docs/intro"
            >
              快速开始
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
              to="/docs/components"
            >
              组件文档
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <FeatureCard
              title="简单易用"
              description="提供简洁直观的 API，快速上手"
              icon="🚀"
            />
            <FeatureCard
              title="TypeScript"
              description="完整的类型定义支持"
              icon="📝"
            />
            <FeatureCard
              title="可定制"
              description="支持主题定制，满足业务需求"
              icon="🎨"
            />
          </div>
        </div>
      </header>
    </Layout>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
