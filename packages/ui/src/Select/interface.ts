import type { CSSProperties, FocusEventHandler, ReactNode } from 'react';
import type { Size, Status } from '../interfaces';

/**
 * 选项配置
 */
export interface SelectOption {
  /** 显示文本 */
  label: ReactNode;
  /** 选项值 */
  value: string | number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 子选项（分组） */
  children?: SelectOption[];
}

/**
 * Select 组件 Props
 */
export interface SelectProps {
  /**
   * 当前值（受控）
   */
  value?: string | number;

  /**
   * 默认值（非受控）
   */
  defaultValue?: string | number;

  /**
   * 占位符
   * @default '请选择'
   */
  placeholder?: string;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 选项列表
   * @default []
   */
  options?: SelectOption[];

  /**
   * 选择器尺寸
   * @default 'middle'
   */
  size?: Size;

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;

  /**
   * 是否可清除
   * @default false
   */
  clearable?: boolean;

  /**
   * 是否可搜索
   * @default false
   */
  showSearch?: boolean;

  /**
   * 状态
   */
  status?: Status;

  /**
   * 最大显示标签数（多选时）
   */
  maxTagCount?: number;

  /**
   * 下拉菜单类名
   */
  dropdownClassName?: string;

  /**
   * 下拉菜单样式
   */
  dropdownStyle?: CSSProperties;

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
  onChange?: (value: string | number) => void;

  /**
   * 搜索回调
   */
  onSearch?: (value: string) => void;

  /**
   * 获得焦点回调
   */
  onFocus?: FocusEventHandler<HTMLDivElement>;

  /**
   * 失去焦点回调
   */
  onBlur?: FocusEventHandler<HTMLDivElement>;

  /**
   * 清除回调
   */
  onClear?: () => void;
}
