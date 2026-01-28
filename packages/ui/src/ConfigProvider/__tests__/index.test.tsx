import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ConfigProvider } from '../index';
import { useConfig } from '../../hooks';

// 测试组件，用于获取 context 值
function TestConsumer() {
  const { theme, resolvedTheme, prefixCls, setTheme } = useConfig();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="resolved-theme">{resolvedTheme}</span>
      <span data-testid="prefix-cls">{prefixCls}</span>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
    </div>
  );
}

describe('ConfigProvider', () => {
  // 默认值测试
  it('provides default values', () => {
    render(
      <ConfigProvider>
        <TestConsumer />
      </ConfigProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('light');
    expect(screen.getByTestId('prefix-cls')).toHaveTextContent('lyn');
  });

  // 自定义主题测试
  it('accepts custom theme', () => {
    render(
      <ConfigProvider theme="dark">
        <TestConsumer />
      </ConfigProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('dark');
  });

  // 自定义前缀测试
  it('accepts custom prefixCls', () => {
    render(
      <ConfigProvider prefixCls="custom">
        <TestConsumer />
      </ConfigProvider>
    );
    expect(screen.getByTestId('prefix-cls')).toHaveTextContent('custom');
  });

  // 动态切换主题测试
  it('allows theme switching via setTheme', async () => {
    render(
      <ConfigProvider>
        <TestConsumer />
      </ConfigProvider>
    );

    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('light');

    await act(async () => {
      screen.getByText('Set Dark').click();
    });

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('dark');
  });

  // 嵌套 ConfigProvider 测试
  it('supports nested ConfigProvider', () => {
    render(
      <ConfigProvider prefixCls="outer">
        <ConfigProvider prefixCls="inner">
          <TestConsumer />
        </ConfigProvider>
      </ConfigProvider>
    );
    expect(screen.getByTestId('prefix-cls')).toHaveTextContent('inner');
  });

  // data-theme 属性测试
  it('sets data-theme attribute on document', () => {
    render(
      <ConfigProvider theme="dark">
        <TestConsumer />
      </ConfigProvider>
    );
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  // 渲染子元素测试
  it('renders children', () => {
    render(
      <ConfigProvider>
        <div data-testid="child">Child content</div>
      </ConfigProvider>
    );
    expect(screen.getByTestId('child')).toHaveTextContent('Child content');
  });
});
