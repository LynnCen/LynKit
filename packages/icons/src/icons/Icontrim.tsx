import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * trim
 * @source figma
 */
const Icontrim = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4 4H8V5.5L4 5.5C3.72386 5.5 3.5 5.72386 3.5 6L3.5 18C3.5 18.2761 3.72386 18.5 4 18.5H8V20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z"
        fill={color}
      />
      <path
        d="M20 18.5H16V20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H16V5.5L20 5.5C20.2761 5.5 20.5 5.72386 20.5 6V18C20.5 18.2761 20.2761 18.5 20 18.5Z"
        fill={color}
      />
      <path d="M7 11.25H17V12.75H7V11.25Z" fill={color} />
    </svg>
  );
});

Icontrim.displayName = 'Icontrim';

export default Icontrim;
