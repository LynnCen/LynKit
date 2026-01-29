import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * format_down
 * @source figma
 */
const Iconformatdown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M10.5 21L10.5 9L9 9L9 21L10.5 21Z" fill={color} />
      <path d="M19.5 9L19.5 21L18 21L18 9L19.5 9Z" fill={color} />
      <path d="M15 21L15 3L13.5 3L13.5 21L15 21Z" fill={color} />
    </svg>
  );
});

Iconformatdown.displayName = 'Iconformatdown';

export default Iconformatdown;
