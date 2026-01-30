import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * border_color
 * @source figma
 */
const Iconbordercolor = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM16 8H8V16H16V8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7H17V17H7V7ZM8 8H16V16H8V8Z"
        fill="black"
        fillOpacity={0.08}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
        fill="black"
        fillOpacity={0.08}
      />
    </svg>
  );
});

Iconbordercolor.displayName = 'Iconbordercolor';

export default Iconbordercolor;
