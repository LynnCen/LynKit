import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * stroke_center_fill
 * @source figma
 */
const Iconstrokecenterfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M3 3H7V7H3V3Z" fill={color} />
      <path d="M4.5 8.99999V15H5.74995V8.99999H4.5Z" fill={color} />
      <path d="M9.00005 5.5V4.5H15V5.5H9.00005Z" fill={color} />
      <path d="M18.5 8.99999V15H19.5V8.99999H18.5Z" fill={color} />
      <path d="M15 19.5V18.5H9.00005V19.5H15Z" fill={color} />
      <path d="M7 17H3V21H7V17Z" fill={color} />
      <path d="M17 3H21V7H17V3Z" fill={color} />
      <path d="M21 17H17V21H21V17Z" fill={color} />
    </svg>
  );
});

Iconstrokecenterfill.displayName = 'Iconstrokecenterfill';

export default Iconstrokecenterfill;
