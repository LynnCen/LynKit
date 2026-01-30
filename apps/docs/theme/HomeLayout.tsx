import { useNavigate, withBase } from 'rspress/runtime';
import Navigation from './components/Navigation';
import FluidBackground from './components/canvas/FluidBackground';
import UIComponentsCanvas from './components/canvas/UIComponentsCanvas';
import HooksCanvas from './components/canvas/HooksCanvas';
import APICanvas from './components/canvas/APICanvas';
import IconsCanvas from './components/canvas/IconsCanvas';
import './home.css';

export default function HomeLayout() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(withBase(path));
  };

  const modules = [
    {
      id: 'ui',
      icon: '🎨',
      title: 'UI 组件库',
      subtitle: '精美的 React 组件集合',
      description:
        '提供开箱即用的高质量 UI 组件，包括 Button、Input、Select 等常用组件。完整的 TypeScript 类型定义，支持主题定制，让你的应用界面更加精美。',
      canvas: <UIComponentsCanvas />,
      stats: ['3+ 组件', 'TypeScript', '主题定制'],
      link: '/components/overview',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea',
    },
    {
      id: 'hooks',
      icon: '🪝',
      title: 'React Hooks',
      subtitle: '实用的 Hooks 工具集',
      description:
        '精心设计的 React Hooks 集合，包括 useAsync、useInterval、usePrevious 等实用 Hook。帮助你更高效地管理状态、处理副作用，提升开发效率。',
      canvas: <HooksCanvas />,
      stats: ['5+ Hooks', '高性能', '易集成'],
      link: '/hooks/overview',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb',
    },
    {
      id: 'api',
      icon: '⚡',
      title: 'API 工具库',
      subtitle: '高性能工具函数集合',
      description:
        '包含防抖（debounce）、节流（throttle）、LRU 缓存、指数退避等常用工具函数。零依赖，体积小巧，经过充分测试，让你的应用性能更优。',
      canvas: <APICanvas />,
      stats: ['4+ 工具', '零依赖', '轻量级'],
      link: '/api/overview',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe',
    },
    {
      id: 'icons',
      icon: '✨',
      title: '图标库',
      subtitle: '丰富的 SVG 图标资源',
      description:
        '收录 1000+ 精美 SVG 图标，覆盖各种使用场景。支持按需导入，自定义颜色和大小，让你的应用界面更加丰富多彩。',
      canvas: <IconsCanvas />,
      stats: ['1000+ 图标', 'SVG', '按需导入'],
      link: '/icons/index',
      gradient: 'linear-gradient(135deg, #faa561 0%, #fed6e3 100%)',
      color: '#faa561',
    },
  ];

  return (
    <div className="lynkit-home">
      {/* 淡雅背景 */}
      <FluidBackground />

      {/* 导航栏 */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* 主标题 - 渐变特效 */}
          <h1 className="hero-title">
            <span className="title-main">LynKit</span>
          </h1>

          <p className="hero-tagline">现代化 React 组件生态</p>

          <p className="hero-description">为 Web 开发者打造的完整解决方案</p>

          <div className="hero-buttons">
            <button
              className="btn-primary-large"
              onClick={() => handleNavigate('/guide/getting-started')}
            >
              <span>快速开始</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="btn-secondary-large"
              onClick={() => window.open('https://github.com/LynnCen/LynKit', '_blank')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          {/* 终端展示 */}
          <div className="terminal-modern">
            <div className="terminal-header-modern">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="terminal-title">Terminal</span>
            </div>
            <div className="terminal-body-modern">
              <div className="terminal-line-modern">
                <span className="prompt">$</span>
                <span className="command">
                  pnpm add @lynkit/ui @lynkit/hooks @lynkit/api @lynkit/icons
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 滚动指示器 */}
        <div className="scroll-hint">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* Modules Section - 每行一个模块 */}
      <section className="modules-section-vertical">
        <div className="container-large">
          <div className="section-header-center">
            <h2 className="section-title-large">核心模块</h2>
            <p className="section-subtitle-large">四大核心能力，构建完整的前端开发生态</p>
          </div>

          <div className="modules-vertical-list">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`module-card-vertical module-${module.id}`}
                onClick={() => handleNavigate(module.link)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="module-left">
                  <div className="module-canvas-vertical">{module.canvas}</div>
                </div>

                <div className="module-right">
                  <div className="module-header-vertical">
                    <span className="module-emoji-large">{module.icon}</span>
                    <div className="module-title-group">
                      <h3 className="module-title-vertical">{module.title}</h3>
                      <p className="module-subtitle-vertical">{module.subtitle}</p>
                    </div>
                  </div>

                  <p className="module-description-vertical">{module.description}</p>

                  <div className="module-footer-vertical">
                    <div className="module-stats-vertical">
                      {module.stats.map((stat, i) => (
                        <span key={i} className="stat-badge">
                          {stat}
                        </span>
                      ))}
                    </div>

                    <button
                      className="module-link-btn"
                      style={{
                        background: module.gradient,
                        borderColor: module.color,
                      }}
                    >
                      <span>了解更多</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  className="module-gradient-overlay"
                  style={{ background: module.gradient }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-modern">
        <div className="container-large">
          <h2 className="section-title-center">为什么选择 LynKit？</h2>

          <div className="features-grid-modern">
            {[
              {
                icon: '⚡',
                title: '极速开发',
                desc: 'TypeScript 类型完善，开箱即用，专注业务逻辑',
              },
              { icon: '🎨', title: '精美设计', desc: '精心打磨的 UI 组件，支持主题定制' },
              { icon: '📦', title: '按需加载', desc: '支持 Tree Shaking，优化包体积' },
              { icon: '🔌', title: '插件化', desc: '灵活的插件系统，丰富的工具函数' },
              { icon: '🚀', title: '高性能', desc: '轻量级实现，优化的渲染性能' },
              { icon: '📖', title: '文档完善', desc: '详细的文档和示例，快速上手' },
            ].map((feature, index) => (
              <div key={index} className="feature-card-modern">
                <div className="feature-icon-modern">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-modern">
        <div className="cta-content-modern">
          <h2>准备好开始了吗？</h2>
          <p>立即使用 LynKit 开启你的下一个项目</p>
          <button className="btn-cta" onClick={() => handleNavigate('/guide/getting-started')}>
            立即开始
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer-modern">
        <div className="container-large">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">LynKit</h3>
              <p>现代化 React 组件生态系统</p>
            </div>
            <div className="footer-links-grid">
              <div className="footer-column">
                <h4>产品</h4>
                <a onClick={() => handleNavigate('/components/overview')}>UI 组件</a>
                <a onClick={() => handleNavigate('/hooks/overview')}>React Hooks</a>
                <a onClick={() => handleNavigate('/api/overview')}>API 工具</a>
                <a onClick={() => handleNavigate('/icons/index')}>图标库</a>
              </div>
              <div className="footer-column">
                <h4>资源</h4>
                <a onClick={() => handleNavigate('/guide/introduction')}>使用文档</a>
                <a onClick={() => handleNavigate('/guide/getting-started')}>快速开始</a>
                <a onClick={() => handleNavigate('/guide/changelog')}>更新日志</a>
              </div>
              <div className="footer-column">
                <h4>社区</h4>
                <a
                  href="https://github.com/LynnCen/LynKit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom-modern">
            <p>© 2024 LynKit. Built with ❤️ and Rspress.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
