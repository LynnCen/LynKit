import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_color
 * @source figma
 */
const Iconshapecolor = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <rect x="2" y="2" width="20" height="20" rx="2" fill={color} />
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

Iconshapecolor.displayName = 'Iconshapecolor';

export default Iconshapecolor;
