import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * full_screen_fill
 * @source figma
 */
const Iconfullscreenfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21 19C21 20.0357 20.2128 20.887 19.2041 20.9893L19 21H14V19H19V14H21V19Z"
        fill="black"
      />
      <path d="M10 3V5H5V10H3V5C3 3.89543 3.89543 3 5 3H10Z" fill="black" />
    </svg>
  );
});

Iconfullscreenfill.displayName = 'Iconfullscreenfill';

export default Iconfullscreenfill;
