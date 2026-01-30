import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * auto_width_home
 * @source figma
 */
const Iconautowidthhome = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.85432 16.5L6.99414 15.5208L4.62254 12.7519L19.3775 12.752L17.0059 15.5209L18.1457 16.5L22 12L18.1457 7.50004L17.0059 8.47918L19.3775 11.2481L4.62254 11.248L6.99414 8.47914L5.85432 7.5L2 12L5.85432 16.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconautowidthhome.displayName = 'Iconautowidthhome';

export default Iconautowidthhome;
