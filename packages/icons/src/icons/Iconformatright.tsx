import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * format_right
 * @source figma
 */
const Iconformatright = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M3 6H21V4.5H3V6Z" fill={color} />
      <path d="M9 10.5H21V9H9V10.5Z" fill={color} />
      <path d="M21 19.5H9V18H21V19.5Z" fill={color} />
      <path d="M3 15H21V13.5H3V15Z" fill={color} />
    </svg>
  );
});

Iconformatright.displayName = 'Iconformatright';

export default Iconformatright;
