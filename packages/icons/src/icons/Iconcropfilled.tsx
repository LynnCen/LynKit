import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * crop_filled
 * @source figma
 */
const Iconcropfilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.75 17.25H21.5V18.75H18.75V21.5H17.25V18.75H6.25C5.69772 18.75 5.25 18.3023 5.25 17.75V6.75H2.5V5.25H5.25V2.5H6.75V17.25Z"
        fill={color}
      />
      <path d="M15.75 15.75H8.25V8.25H15.75V15.75Z" fill={color} />
      <path
        d="M17.75 5.25C18.3023 5.25 18.75 5.69772 18.75 6.25V15.75H17.25V6.75H8.25V5.25H17.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconcropfilled.displayName = 'Iconcropfilled';

export default Iconcropfilled;
