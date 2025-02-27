import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.title} description="轻量级 React 组件库">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{siteConfig.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{siteConfig.tagline}</p>

          <div className="flex justify-center gap-4">
            <a
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              href="/docs/intro"
            >
              快速开始
            </a>
            <a
              className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200"
              href="/docs/components"
            >
              组件文档
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
