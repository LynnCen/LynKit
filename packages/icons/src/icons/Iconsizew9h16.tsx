import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w9_h16
 * @source figma
 */
const Iconsizew9h16 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.499 19.3889L15.499 4.61108L8.49902 4.61108L8.49902 19.3889L15.499 19.3889ZM16.999 3.11108L6.99902 3.11108L6.99902 20.8889L16.999 20.8889L16.999 3.11108Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew9h16.displayName = 'Iconsizew9h16';

export default Iconsizew9h16;
