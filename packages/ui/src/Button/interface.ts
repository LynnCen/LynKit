import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonType, Size } from '../interfaces';

/**
 * Button 组件 Props
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: ButtonType;

  /**
   * 按钮尺寸
   * @default 'middle'
   */
  size?: Size;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;

  /**
   * 图标
   */
  icon?: ReactNode;

  /**
   * 子元素
   */
  children?: ReactNode;
}
