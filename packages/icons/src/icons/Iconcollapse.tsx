import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * collapse
 * @source figma
 */
const Iconcollapse = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M20.5607 20V4L19.0607 4V20H20.5607Z" fill={color} />
      <path
        d="M3.00003 11.9999L8.03036 17.0303L9.09102 15.9696L5.87135 12.7499L18.0607 12.7499V11.2499L5.87137 11.2499L9.09102 8.03032L8.03037 6.96966L3.00003 11.9999Z"
        fill={color}
      />
    </svg>
  );
});

Iconcollapse.displayName = 'Iconcollapse';

export default Iconcollapse;
