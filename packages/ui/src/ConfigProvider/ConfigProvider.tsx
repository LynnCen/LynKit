import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ConfigContext } from './context';
import type { ConfigProviderProps, ThemeMode } from './interface';

/**
 * 获取系统主题偏好
 */
function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * 解析主题模式
 */
function resolveTheme(theme: ThemeMode): 'light' | 'dark' {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
}

/**
 * ConfigProvider 全局配置组件
 *
 * 提供主题切换、类名前缀等全局配置能力
 *
 * @example
 * ```tsx
 * import { ConfigProvider, Button } from '@lynkit/ui';
 *
 * function App() {
 *   return (
 *     <ConfigProvider theme="dark">
 *       <Button type="primary">按钮</Button>
 *     </ConfigProvider>
 *   );
 * }
 * ```
 */
export function ConfigProvider({
  theme = 'light',
  prefixCls = 'lyn',
  children,
}: ConfigProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(theme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => resolveTheme(theme));

  // 同步外部 theme prop 变化
  useEffect(() => {
    setCurrentTheme(theme);
    setResolvedTheme(resolveTheme(theme));
  }, [theme]);

  // 监听系统主题变化
  useEffect(() => {
    if (currentTheme !== 'system' || typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
      setResolvedTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [currentTheme]);

  // 应用主题到 DOM
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;

    if (resolvedTheme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [resolvedTheme]);

  // 切换主题的方法
  const setTheme = useCallback((newTheme: ThemeMode) => {
    setCurrentTheme(newTheme);
    setResolvedTheme(resolveTheme(newTheme));
  }, []);

  // Context 值
  const contextValue = useMemo(
    () => ({
      theme: currentTheme,
      resolvedTheme,
      prefixCls,
      setTheme,
    }),
    [currentTheme, resolvedTheme, prefixCls, setTheme]
  );

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>;
}

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
