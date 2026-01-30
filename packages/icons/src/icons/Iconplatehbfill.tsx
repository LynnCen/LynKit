import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * plate_hb_fill
 * @source figma
 */
const Iconplatehbfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M5 3C3.89543 3 3 3.89543 3 5V14H21V5C21 3.89543 20.1046 3 19 3H5Z" fill={color} />
      <path d="M8 16H3V19C3 20.1046 3.89543 21 5 21H8V16Z" fill={color} />
      <path d="M10 16H14V21H10V16Z" fill={color} />
      <path d="M21 16H16V21H19C20.1046 21 21 20.1046 21 19V16Z" fill={color} />
    </svg>
  );
});

Iconplatehbfill.displayName = 'Iconplatehbfill';

export default Iconplatehbfill;
