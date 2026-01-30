import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * stroke_fill
 * @source figma
 */
const Iconstrokefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M3 5V6.5H21V5H3ZM3 9.5V12H21V9.5H3ZM3 15V19H21V15H3Z" fill={color} />
    </svg>
  );
});

Iconstrokefill.displayName = 'Iconstrokefill';

export default Iconstrokefill;
