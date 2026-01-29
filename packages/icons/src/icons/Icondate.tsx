import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * date
 * @source figma
 */
const Icondate = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M11.25 7V17H12.75V7H11.25Z" fill={color} />
      <path d="M7.25 10V17H8.75V10H7.25Z" fill={color} />
      <path d="M15.25 13V17H16.75V13H15.25Z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
        fill={color}
      />
    </svg>
  );
});

Icondate.displayName = 'Icondate';

export default Icondate;
