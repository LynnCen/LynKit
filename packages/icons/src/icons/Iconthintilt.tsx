import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * thin_tilt
 * @source figma
 */
const Iconthintilt = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.1894 6.75H8.00006V5.25H18.7501V16H17.2501V7.81066L6.53039 18.5303L5.46973 17.4697L16.1894 6.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconthintilt.displayName = 'Iconthintilt';

export default Iconthintilt;
