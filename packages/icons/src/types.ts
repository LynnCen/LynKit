import type { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

/**
 * 图标组件通用 Props
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * 图标尺寸
   * @default 24
   */
  size?: number | string;

  /**
   * 图标颜色
   * @default 'currentColor'
   */
  color?: string;
}

/**
 * 图标组件类型
 */
export type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
