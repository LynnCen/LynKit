import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w1_h2
 * @source figma
 */
const Iconsizew1h2 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9 4.5L9 19.5L15 19.5L15 4.5L9 4.5ZM7.5 21L16.5 21L16.5 3L7.5 3L7.5 21Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew1h2.displayName = 'Iconsizew1h2';

export default Iconsizew1h2;
