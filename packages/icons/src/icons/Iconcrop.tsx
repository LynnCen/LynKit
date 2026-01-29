import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * crop
 * @source figma
 */
const Iconcrop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.25 6.75V17.75C5.25 18.3023 5.69772 18.75 6.25 18.75H17.25V21.5H18.75V18.75H21.5V17.25H6.75V2.5H5.25V5.25H2.5V6.75H5.25Z"
        fill={color}
      />
      <path
        d="M17.25 15.75H18.75V6.25C18.75 5.69772 18.3023 5.25 17.75 5.25H8.25V6.75H17.25V15.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconcrop.displayName = 'Iconcrop';

export default Iconcrop;
