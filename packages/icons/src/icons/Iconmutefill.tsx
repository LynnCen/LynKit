import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * mute_fill
 * @source figma
 */
const Iconmutefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 8.5V15.5H7L12.6951 19.8809C13.024 20.1338 13.5 19.8994 13.5 19.4846V4.51543C13.5 4.10059 13.024 3.86619 12.6951 4.11912L7 8.5H3Z"
        fill={color}
      />
      <path
        d="M16.9393 12L14.9697 10.0303L16.0303 8.96967L18 10.9393L19.9697 8.96967L21.0303 10.0303L19.0607 12L21.0303 13.9697L19.9697 15.0303L18 13.0607L16.0303 15.0303L14.9697 13.9697L16.9393 12Z"
        fill={color}
      />
    </svg>
  );
});

Iconmutefill.displayName = 'Iconmutefill';

export default Iconmutefill;
