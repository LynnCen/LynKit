import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_up_triangle
 * @source figma
 */
const Iconarrowuptriangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.2925 14.1746C17.5705 14.4989 17.3401 15 16.9129 15L7.08711 15C6.65993 15 6.42948 14.4989 6.70748 14.1746L11.6204 8.4429C11.8199 8.21009 12.1801 8.21009 12.3796 8.4429L17.2925 14.1746Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowuptriangle.displayName = 'Iconarrowuptriangle';

export default Iconarrowuptriangle;
