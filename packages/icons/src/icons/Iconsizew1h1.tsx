import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w1_h1
 * @source figma
 */
const Iconsizew1h1 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 5H5V19H19V5ZM3.5 3.5V20.5H20.5V3.5H3.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew1h1.displayName = 'Iconsizew1h1';

export default Iconsizew1h1;
