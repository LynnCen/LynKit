import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * border_right_multiple
 * @source figma
 */
const Iconborderrightmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C19.9317 21 20.7123 20.3623 20.9346 19.5C20.9536 19.4263 20.9675 19.351 20.9785 19.2744C20.9909 19.1846 21 19.0932 21 19V5C21 3.89543 20.1046 3 19 3H5ZM19.5 19C19.5 19.2761 19.2761 19.5 19 19.5H12.75V12.75H19.5V19ZM11.25 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V12.75H11.25V19.5ZM19 4.5C19.2761 4.5 19.5 4.72386 19.5 5V11.25H12.75V4.5H19ZM11.25 11.25H4.5V5C4.5 4.72386 4.72386 4.5 5 4.5H11.25V11.25Z"
        fill={color}
      />
      <path
        d="M19.5 20.936C20.3623 20.7138 21 19.9331 21 19.0015V5.00146C20.9998 4.06992 20.3622 3.28904 19.5 3.06689V20.936Z"
        fill={color}
      />
    </svg>
  );
});

Iconborderrightmultiple.displayName = 'Iconborderrightmultiple';

export default Iconborderrightmultiple;
