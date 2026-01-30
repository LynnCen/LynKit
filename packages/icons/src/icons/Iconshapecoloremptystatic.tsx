import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_color_empty_static
 * @source figma
 */
const Iconshapecoloremptystatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 2H7V7H2V12H7V17H2V20C2 21.1046 2.89543 22 4 22H7V17H12V22H17V17H22V12H17V7H22V4C22 2.89543 21.1046 2 20 2H17V7H12V2ZM12 12H17V17H12V12ZM12 12V7H7V12H12Z"
        fill="white"
      />
      <path d="M2 4C2 2.89543 2.89543 2 4 2H7V7H2V4Z" fill="#F0F0F0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7H7V12H2V17H7V22H12V17H17V22H20C21.1046 22 22 21.1046 22 20V17H17V12H22V7H17V2H12V7ZM12 12V7H17V12H12ZM12 12V17H7V12H12Z"
        fill="#F0F0F0"
      />
      <path d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H12V2H4Z" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
        fill="black"
        fillOpacity={0.08}
      />
    </svg>
  );
});

Iconshapecoloremptystatic.displayName = 'Iconshapecoloremptystatic';

export default Iconshapecoloremptystatic;
