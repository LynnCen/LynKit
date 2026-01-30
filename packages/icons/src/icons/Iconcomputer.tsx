import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * computer
 * @source figma
 */
const Iconcomputer = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H11.25V19.5H7V21H17V19.5H12.75V17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5ZM19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V15C4.5 15.2761 4.72386 15.5 5 15.5H19C19.2761 15.5 19.5 15.2761 19.5 15V5C19.5 4.72386 19.2761 4.5 19 4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconcomputer.displayName = 'Iconcomputer';

export default Iconcomputer;
