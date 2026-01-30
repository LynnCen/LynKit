import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w2_h3
 * @source figma
 */
const Iconsizew2h3 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.5 4.5L7.5 19.5L16.5 19.5L16.5 4.5L7.5 4.5ZM6 21L18 21L18 3L6 3L6 21Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew2h3.displayName = 'Iconsizew2h3';

export default Iconsizew2h3;
