import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * adjust
 * @source figma
 */
const Iconadjust = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.8855 12.75C12.567 13.7643 11.6194 14.5 10.5 14.5C9.38059 14.5 8.43302 13.7643 8.11445 12.75H6V11.25H8.11445C8.43302 10.2357 9.38059 9.5 10.5 9.5C11.6194 9.5 12.567 10.2357 12.8855 11.25H18V12.75H12.8855ZM11.5 12C11.5 12.5523 11.0523 13 10.5 13C9.94772 13 9.5 12.5523 9.5 12C9.5 11.4477 9.94772 11 10.5 11C11.0523 11 11.5 11.4477 11.5 12Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconadjust.displayName = 'Iconadjust';

export default Iconadjust;
