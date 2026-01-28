import type { CSSProperties, FocusEventHandler, KeyboardEvent, ReactNode } from 'react';
import type { Size, Status } from '../interfaces';

/**
 * Input 组件 Props
 */
export interface InputProps {
  /**
   * 输入框值（受控）
   */
  value?: string;

  /**
   * 默认值（非受控）
   */
  defaultValue?: string;

  /**
   * 占位符
   */
  placeholder?: string;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否只读
   * @default false
   */
  readOnly?: boolean;

  /**
   * 最大长度
   */
  maxLength?: number;

  /**
   * 是否显示字数统计
   * @default false
   */
  showCount?: boolean;

  /**
   * 输入框尺寸
   * @default 'middle'
   */
  size?: Size;

  /**
   * 前缀图标
   */
  prefix?: ReactNode;

  /**
   * 后缀图标
   */
  suffix?: ReactNode;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 值变化回调
   */
  onChange?: (value: string) => void;

  /**
   * 按下回车键回调
   */
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;

  /**
   * 获得焦点回调
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;

  /**
   * 失去焦点回调
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;

  /**
   * 输入框状态
   */
  status?: Status;
}
