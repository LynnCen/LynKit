import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * format_full_hight
 * @source figma
 */
const Iconformatfullhight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M18 3L18 21L19.5 21L19.5 3L18 3Z" fill={color} />
      <path d="M13.5 3L13.5 21L15 21L15 3L13.5 3Z" fill={color} />
      <path d="M4.5 21L4.5 3L6 3L6 21L4.5 21Z" fill={color} />
      <path d="M9 3L9 21L10.5 21L10.5 3L9 3Z" fill={color} />
    </svg>
  );
});

Iconformatfullhight.displayName = 'Iconformatfullhight';

export default Iconformatfullhight;
