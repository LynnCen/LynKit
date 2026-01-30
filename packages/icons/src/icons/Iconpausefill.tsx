import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * pause_fill
 * @source figma
 */
const Iconpausefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.25 4V20H6.75V4H4.25Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.25 4V20H19.75V4H17.25Z" fill={color} />
    </svg>
  );
});

Iconpausefill.displayName = 'Iconpausefill';

export default Iconpausefill;
