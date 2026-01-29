import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * layout
 * @source figma
 */
const Iconlayout = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19ZM19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7.25H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5ZM19.5 19V8.75H8.75V19.5H19C19.2761 19.5 19.5 19.2761 19.5 19ZM7.25 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V8.75H7.25V19.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconlayout.displayName = 'Iconlayout';

export default Iconlayout;
