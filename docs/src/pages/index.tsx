import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.title} description="轻量级 React 组件库">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero__title mb-6">
              <Translate>构建</Translate>
              <span className="text-indigo-600 dark:text-indigo-400">
                <Translate>现代化</Translate>
              </span>
              <Translate>的</Translate>
              <br className="hidden sm:block" />
              <Translate>React 组件库</Translate>
            </h1>
            <p className="hero__subtitle mb-12">
              <Translate>
                专注于组件开发，提供完整的开发工具链和最佳实践
              </Translate>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                className="inline-flex items-center px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all hover:scale-105 shadow-md dark:bg-indigo-500 dark:hover:bg-indigo-600"
                to="/docs/intro"
              >
                <Translate>开始使用</Translate>
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
                className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-gray-700 font-medium border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all hover:scale-105 shadow-sm dark:bg-slate-800 dark:text-gray-300 dark:border-gray-700 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                to="/docs/components"
              >
                <Translate>浏览组件</Translate>
              </Link>
            </div>
          </div>
        </div>

        {/* 装饰背景 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900/30),theme(colors.slate.800))]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-10">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" />
          </div>

          {/* 装饰图形 */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white dark:bg-slate-900 [mask-image:linear-gradient(transparent,#fff)]" />

          {/* 网格背景 */}
          <div className="absolute inset-0 bg-grid-slate-900/[0.03] dark:bg-grid-slate-100/[0.03] bg-[center_-1px] [mask-image:linear-gradient(0deg,transparent,black)]" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <Translate>为什么选择 LynKit?</Translate>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="⚡️"
              title={<Translate>开箱即用</Translate>}
              description={
                <Translate>
                  提供丰富的组件和 Hooks，支持 TypeScript，快速构建应用
                </Translate>
              }
            />
            <FeatureCard
              icon="🎨"
              title={<Translate>灵活定制</Translate>}
              description={
                <Translate>
                  支持主题配置和样式覆盖，满足各类个性化需求
                </Translate>
              }
            />
            <FeatureCard
              icon="📦"
              title={<Translate>工程化</Translate>}
              description={
                <Translate>
                  基于 Monorepo 架构，支持按需加载，提供完整的工具链
                </Translate>
              }
            />
          </div>
        </div>
      </section>

      {/* Components Preview Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <Translate>组件预览</Translate>
          </h2>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 w-full max-w-3xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                  <Translate>组件示例</Translate>
                </span>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                    <Translate>主要按钮</Translate>
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-gray-700 font-medium border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                    <Translate>次要按钮</Translate>
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-md text-indigo-600 font-medium hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                    <Translate>文本按钮</Translate>
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  <div className="bg-gray-50 dark:bg-slate-800 rounded-md p-4">
                    <code className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                      import {'{'} Button {'}'} from '@lynkit/ui';
                    </code>
                  </div>

                  <div className="flex justify-center mt-4">
                    <Link
                      to="/docs/components/button"
                      className="text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline"
                    >
                      <Translate>查看更多组件 →</Translate>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-indigo-600 dark:bg-indigo-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            <Translate>准备好使用 LynKit 了吗？</Translate>
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-lg">
            <Translate>立即开始使用我们的组件库，让前端开发更高效！</Translate>
          </p>
          <div className="flex justify-center gap-4">
            <Link
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-medium hover:bg-gray-100 transition-colors shadow-md"
              to="/docs/intro"
            >
              <Translate>开始使用</Translate>
            </Link>
            <Link
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-500 text-white border border-indigo-400 font-medium hover:bg-indigo-400 transition-colors"
              to="https://github.com/your-org/lynkit"
            >
              <Translate>GitHub</Translate>
            </Link>
          </div>
        </div>

        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
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
  title: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <div className="feature-card group p-8 bg-gray-50/50 dark:bg-slate-800/50 rounded-2xl transition-all hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg hover:-translate-y-1">
      <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
