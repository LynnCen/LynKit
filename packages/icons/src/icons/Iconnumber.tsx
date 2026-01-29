import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * number
 * @source figma
 */
const Iconnumber = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 6.75L5 6.75L5 5.25H3V6.75ZM7 6.75L21 6.75V5.25H7V6.75ZM21 12.75H7V11.25H21V12.75ZM3 12.75L5 12.75L5 11.25L3 11.25V12.75ZM21 18.75H7V17.25H21V18.75ZM3 18.75H5L5 17.25H3V18.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconnumber.displayName = 'Iconnumber';

export default Iconnumber;
