import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * thin_left
 * @source figma
 */
const Iconthinleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.81065 12.7501L12.0303 17.9697L10.9697 19.0304L3.93933 12.0001L10.9697 4.96973L12.0303 6.03039L6.81065 11.2501H20V12.7501H6.81065Z"
        fill={color}
      />
    </svg>
  );
});

Iconthinleft.displayName = 'Iconthinleft';

export default Iconthinleft;
