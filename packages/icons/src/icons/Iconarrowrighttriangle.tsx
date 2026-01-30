import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_right_triangle
 * @source figma
 */
const Iconarrowrighttriangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.3254 17.2925C10.0011 17.5705 9.5 17.3401 9.5 16.9129L9.5 7.08711C9.5 6.65993 10.0011 6.42948 10.3254 6.70748L16.0571 11.6204C16.2899 11.8199 16.2899 12.1801 16.0571 12.3796L10.3254 17.2925Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowrighttriangle.displayName = 'Iconarrowrighttriangle';

export default Iconarrowrighttriangle;
