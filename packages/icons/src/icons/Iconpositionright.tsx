import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * position_right
 * @source figma
 */
const Iconpositionright = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21 4L21 20L19.5 20L19.5 4L21 4ZM15.1895 11.25L11.9697 8.03027L13.0303 6.96973L18.0605 12L13.0303 17.0303L11.9697 15.9697L15.1895 12.75L3 12.75L3 11.25L15.1895 11.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconpositionright.displayName = 'Iconpositionright';

export default Iconpositionright;
