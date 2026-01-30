import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * format_center
 * @source figma
 */
const Iconformatcenter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M6.0001 10.5H18.0001V9H6.0001V10.5Z" fill={color} />
      <path d="M18.0001 19.5H6.0001V18H18.0001V19.5Z" fill={color} />
      <path d="M3 15H21V13.5H3V15Z" fill={color} />
    </svg>
  );
});

Iconformatcenter.displayName = 'Iconformatcenter';

export default Iconformatcenter;
