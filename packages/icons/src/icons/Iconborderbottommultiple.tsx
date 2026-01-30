import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * border_bottom_multiple
 * @source figma
 */
const Iconborderbottommultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5L21 19C21 20.1046 20.1046 21 19 21L5 21C3.89543 21 3 20.1046 3 19L3 5ZM19 19.5C19.2761 19.5 19.5 19.2761 19.5 19L19.5 12.75L12.75 12.75L12.75 19.5L19 19.5ZM19.5 11.25L19.5 5C19.5 4.72386 19.2761 4.5 19 4.5L12.75 4.5L12.75 11.25L19.5 11.25ZM4.5 19C4.5 19.2761 4.72386 19.5 5 19.5L11.25 19.5L11.25 12.75L4.5 12.75L4.5 19ZM11.25 11.25L11.25 4.5L5 4.5C4.72386 4.5 4.5 4.72386 4.5 5L4.5 11.25L11.25 11.25Z"
        fill={color}
      />
      <path
        d="M20.936 19.5C20.7138 20.3623 19.9331 21 19.0015 21L5.00146 21C4.06992 20.9998 3.28904 20.3622 3.06689 19.5L20.936 19.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconborderbottommultiple.displayName = 'Iconborderbottommultiple';

export default Iconborderbottommultiple;
