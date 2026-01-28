import type { CSSProperties, ReactNode } from 'react';

/**
 * 基础 Props，所有组件都应继承
 */
export interface BaseProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 组件尺寸
 */
export type Size = 'small' | 'middle' | 'large';

/**
 * 状态类型
 */
export type Status = 'success' | 'warning' | 'error';

/**
 * 按钮类型
 */
export type ButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text';
