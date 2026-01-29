import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_triangle_forward_left_fill
 * @source figma
 */
const Iconlinetriangleforwardleftfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path
        d="M2.56973 11.5931L8.2095 7.56472C8.54043 7.32834 9.00012 7.5649 9.00012 7.97158V11.25H21.2501C21.6643 11.25 22.0001 11.5858 22.0001 12C22.0001 12.4142 21.6643 12.75 21.2501 12.75H9.00012V16.0284C9.00012 16.4351 8.54043 16.6716 8.2095 16.4353L2.56973 12.4069C2.29056 12.2074 2.29056 11.7925 2.56973 11.5931Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinetriangleforwardleftfill.displayName = 'Iconlinetriangleforwardleftfill';

export default Iconlinetriangleforwardleftfill;
