import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * form
 * @source figma
 */
const Iconform = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM8.25 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V8.25H8.25V4.5ZM9.75 4.5V8.25H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5H9.75ZM8.25 9.75H4.5V19C4.5 19.2761 4.72386 19.5 5 19.5H8.25L8.25 9.75ZM9.75 19.5L9.75 9.75H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5H9.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconform.displayName = 'Iconform';

export default Iconform;
