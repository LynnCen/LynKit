import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hd
 * @source figma
 */
const Iconhd = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M4.5 4H3V20H4.5V12.5H9.5V20H11V4H9.5V11H4.5V4Z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4V20H17C19.2091 20 21 18.0897 21 15.7333V8.26667C21 5.91025 19.2091 4 17 4H13ZM19.5 15.7333C19.5 17.354 18.291 18.5 17 18.5H14.5V5.5H17C18.291 5.5 19.5 6.64602 19.5 8.26667V15.7333Z"
        fill={color}
      />
    </svg>
  );
});

Iconhd.displayName = 'Iconhd';

export default Iconhd;
