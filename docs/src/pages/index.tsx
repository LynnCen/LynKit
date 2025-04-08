import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.title} description="轻量级 React 组件库">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="container mx-auto px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              构建<span className="text-indigo-600">现代化</span>的
              <br className="hidden sm:block" />
              React 组件库
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              专注于组件开发，提供完整的开发工具链和最佳实践
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                className="inline-flex items-center px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all hover:scale-105"
                to="/docs/intro"
              >
                开始使用
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
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
                className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-gray-700 font-medium border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all hover:scale-105"
                to="https://github.com/your-org/lynkit"
              >
                查看源码
              </Link>
            </div>
          </div>
        </div>

        {/* 装饰背景 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-10">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="⚡️"
              title="开箱即用"
              description="提供丰富的组件和 Hooks，支持 TypeScript，快速构建应用"
            />
            <FeatureCard
              icon="🎨"
              title="灵活定制"
              description="支持主题配置和样式覆盖，满足各类个性化需求"
            />
            <FeatureCard
              icon="📦"
              title="工程化"
              description="基于 Monorepo 架构，支持按需加载，提供完整的工具链"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="group p-8 bg-gray-50/50 rounded-2xl transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1">
      <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
