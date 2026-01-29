import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * stroke_outside_fill
 * @source figma
 */
const Iconstrokeoutsidefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 3H21V21H3V3ZM4 16H8V20H16V16H20V8H16V4L8 4V8H4L4 16Z"
        fill={color}
      />
    </svg>
  );
});

Iconstrokeoutsidefill.displayName = 'Iconstrokeoutsidefill';

export default Iconstrokeoutsidefill;
