import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * node_flat
 * @source figma
 */
const Iconnodeflat = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M3.25 20.75V3.25H20.75V4.75H4.75V20.75H3.25Z" fill={color} />
      <path d="M14 10V11.25H20.75V12.75H14V14H12.75V20.75H11.25V14H10V10H14Z" fill={color} />
    </svg>
  );
});

Iconnodeflat.displayName = 'Iconnodeflat';

export default Iconnodeflat;
