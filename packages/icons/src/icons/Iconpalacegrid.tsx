import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * Palace_grid
 * @source figma
 */
const Iconpalacegrid = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
        fill="black"
        fillOpacity={0.1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4.5H15.5V19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5ZM14 3V21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H14Z"
        fill="black"
        fillOpacity={0.1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H8.5V4.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H10V3H5Z"
        fill="black"
        fillOpacity={0.1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 10H4.5V14H19.5V10ZM3 8.5V15.5H21V8.5H3Z"
        fill="black"
        fillOpacity={0.1}
      />
    </svg>
  );
});

Iconpalacegrid.displayName = 'Iconpalacegrid';

export default Iconpalacegrid;
