import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * minus_small
 * @source figma
 */
const Iconminussmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M6 12.75H18V11.25H6V12.75Z" fill={color} />
    </svg>
  );
});

Iconminussmall.displayName = 'Iconminussmall';

export default Iconminussmall;
