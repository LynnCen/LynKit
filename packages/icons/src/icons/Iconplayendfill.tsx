import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * play_end_fill
 * @source figma
 */
const Iconplayendfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, color = 'currentColor', style, className, ...rest } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <path
        d="M5 18.0397C5 18.4442 5.45534 18.6813 5.78673 18.4493L14.4148 12.4096C14.6992 12.2106 14.6992 11.7894 14.4148 11.5904L5.78673 5.55073C5.45534 5.31875 5 5.55583 5 5.96034V18.0397Z"
        fill={color}
      />
      <path d="M17 6.00001H19V18H17V6.00001Z" fill={color} />
    </svg>
  );
});

Iconplayendfill.displayName = 'Iconplayendfill';

export default Iconplayendfill;
