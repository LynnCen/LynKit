import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * Topping
 * @source figma
 */
const Icontopping = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 5.93934L17.0303 10.9697L15.9696 12.0303L12.7499 8.81066V21H11.2499V8.81067L8.03032 12.0303L6.96966 10.9697L11.9999 5.93934ZM20 4.5H4V3H20V4.5Z"
        fill={color}
      />
    </svg>
  );
});

Icontopping.displayName = 'Icontopping';

export default Icontopping;
