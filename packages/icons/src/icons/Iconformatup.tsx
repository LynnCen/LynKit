import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * format_up
 * @source figma
 */
const Iconformatup = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M6 21L6 3L4.5 3L4.5 21L6 21Z" fill={color} />
      <path d="M10.5 15L10.5 3L9 3L9 15L10.5 15Z" fill={color} />
      <path d="M19.5 3L19.5 15L18 15L18 3L19.5 3Z" fill={color} />
      <path d="M15 21L15 3L13.5 3L13.5 21L15 21Z" fill={color} />
    </svg>
  );
});

Iconformatup.displayName = 'Iconformatup';

export default Iconformatup;
