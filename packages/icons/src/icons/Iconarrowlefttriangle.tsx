import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_left_triangle
 * @source figma
 */
const Iconarrowlefttriangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1746 6.70748C14.4989 6.42948 15 6.65993 15 7.08711L15 16.9129C15 17.3401 14.4989 17.5705 14.1746 17.2925L8.4429 12.3796C8.21009 12.1801 8.21009 11.8199 8.4429 11.6204L14.1746 6.70748Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowlefttriangle.displayName = 'Iconarrowlefttriangle';

export default Iconarrowlefttriangle;
