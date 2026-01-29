import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_down_triangle
 * @source figma
 */
const Iconarrowdowntriangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.2925 9.8254C17.5705 9.50106 17.3401 9 16.9129 9L7.08711 9C6.65993 9 6.42948 9.50106 6.70748 9.8254L11.6204 15.5571C11.8199 15.7899 12.1801 15.7899 12.3796 15.5571L17.2925 9.8254Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowdowntriangle.displayName = 'Iconarrowdowntriangle';

export default Iconarrowdowntriangle;
