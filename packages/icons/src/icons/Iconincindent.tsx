import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * inc_indent
 * @source figma
 */
const Iconincindent = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M21 6H3V4.5H21V6Z" fill={color} />
      <path d="M21 10.5H13V9H21V10.5Z" fill={color} />
      <path d="M21 19.5H3V18H21V19.5Z" fill={color} />
      <path d="M21 15H13V13.5H21V15Z" fill={color} />
      <path
        d="M6.01295 9.46746L7.18392 8.53L9.96094 11.9987L7.18392 15.4675L6.01295 14.53L7.43901 12.7487H3.00019L3.00019 11.2487L7.43901 11.2487L6.01295 9.46746Z"
        fill={color}
      />
    </svg>
  );
});

Iconincindent.displayName = 'Iconincindent';

export default Iconincindent;
