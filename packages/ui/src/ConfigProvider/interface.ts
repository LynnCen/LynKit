import type { ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ConfigProviderProps {
  /**
   * 主题模式
   * - light: 亮色主题
   * - dark: 暗色主题
   * - system: 跟随系统
   * @default 'light'
   */
  theme?: ThemeMode;

  /**
   * 组件类名前缀
   * @default 'lyn'
   */
  prefixCls?: string;

  /**
   * 子组件
   */
  children?: ReactNode;
}

export interface ConfigContextValue {
  /**
   * 当前主题模式
   */
  theme: ThemeMode;

  /**
   * 实际生效的主题（解析 system 后的值）
   */
  resolvedTheme: 'light' | 'dark';

  /**
   * 组件类名前缀
   */
  prefixCls: string;

  /**
   * 切换主题
   */
  setTheme: (theme: ThemeMode) => void;
}
