import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shadow
 * @source figma
 */
const Iconshadow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C11.4518 20.5 10.9158 20.4481 10.3965 20.349L15.2146 17.5672L14.5003 16.33L8.54487 19.7684C8.03667 19.542 7.55479 19.2673 7.10507 18.9499L12.5486 15.8071L11.8343 14.57L5.94792 17.9684C5.60859 17.6244 5.29837 17.2515 5.02128 16.8539L9.88284 14.0471L9.16856 12.8099L4.30591 15.6173C4.10139 15.1831 3.93256 14.7287 3.80319 14.258L9.6915 10.8584L8.97721 9.62124L3.53387 12.764C3.51145 12.5123 3.5 12.2575 3.5 12C3.5 11.6985 3.5157 11.4006 3.54632 11.1072L9.50015 7.66979L8.78587 6.43261L3.96678 9.21491C5.11992 5.88836 8.28104 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
        fill={color}
      />
    </svg>
  );
});

Iconshadow.displayName = 'Iconshadow';

export default Iconshadow;
