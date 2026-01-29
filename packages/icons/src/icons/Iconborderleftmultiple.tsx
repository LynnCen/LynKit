import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * border_left_multiple
 * @source figma
 */
const Iconborderleftmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C4.06829 21 3.28765 20.3623 3.06543 19.5C3.04645 19.4263 3.03255 19.351 3.02148 19.2744C3.00914 19.1846 3 19.0932 3 19V5C3 3.89543 3.89543 3 5 3H19ZM4.5 19C4.5 19.2761 4.72386 19.5 5 19.5H11.25V12.75H4.5V19ZM12.75 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V12.75H12.75V19.5ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V11.25H11.25V4.5H5ZM12.75 11.25H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5H12.75V11.25Z"
        fill={color}
      />
      <path
        d="M4.5 20.936C3.63774 20.7138 3 19.9331 3 19.0015V5.00146C3.00021 4.06992 3.63777 3.28904 4.5 3.06689V20.936Z"
        fill={color}
      />
    </svg>
  );
});

Iconborderleftmultiple.displayName = 'Iconborderleftmultiple';

export default Iconborderleftmultiple;
