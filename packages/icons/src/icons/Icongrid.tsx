import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * grid
 * @source figma
 */
const Icongrid = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM5 4.5H9C9.27614 4.5 9.5 4.72386 9.5 5V9C9.5 9.27614 9.27614 9.5 9 9.5H5C4.72386 9.5 4.5 9.27614 4.5 9V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM15 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9C19.5 9.27614 19.2761 9.5 19 9.5H15C14.7239 9.5 14.5 9.27614 14.5 9V5C14.5 4.72386 14.7239 4.5 15 4.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 13C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13H5ZM9 14.5H5C4.72386 14.5 4.5 14.7239 4.5 15V19C4.5 19.2761 4.72386 19.5 5 19.5H9C9.27614 19.5 9.5 19.2761 9.5 19V15C9.5 14.7239 9.27614 14.5 9 14.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM15 14.5H19C19.2761 14.5 19.5 14.7239 19.5 15V19C19.5 19.2761 19.2761 19.5 19 19.5H15C14.7239 19.5 14.5 19.2761 14.5 19V15C14.5 14.7239 14.7239 14.5 15 14.5Z"
        fill={color}
      />
    </svg>
  );
});

Icongrid.displayName = 'Icongrid';

export default Icongrid;
