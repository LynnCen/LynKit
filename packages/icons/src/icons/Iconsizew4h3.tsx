import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w4_h3
 * @source figma
 */
const Iconsizew4h3 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.5 7.5H5.5V16.5H18.5V7.5ZM4 6V18H20V6H4Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew4h3.displayName = 'Iconsizew4h3';

export default Iconsizew4h3;
