import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * color_default
 * @source figma
 */
const Iconcolordefault = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <rect x="4" y="4" width="16" height="16" fill={color} />
    </svg>
  );
});

Iconcolordefault.displayName = 'Iconcolordefault';

export default Iconcolordefault;
