import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * format_ver_justified
 * @source figma
 */
const Iconformatverjustified = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M6 3L6 21L4.5 21L4.5 3L6 3Z" fill={color} />
      <path d="M10.5 3L10.5 21L9 21L9 3L10.5 3Z" fill={color} />
      <path d="M19.5 15L19.5 3L18 3L18 15L19.5 15Z" fill={color} />
      <path d="M15 3L15 21L13.5 21L13.5 3L15 3Z" fill={color} />
    </svg>
  );
});

Iconformatverjustified.displayName = 'Iconformatverjustified';

export default Iconformatverjustified;
