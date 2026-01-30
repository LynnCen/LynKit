import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * position_left
 * @source figma
 */
const Iconpositionleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 20L3 4.00003L4.5 4.00003L4.5 20L3 20ZM8.81055 12.75L12.0303 15.9698L10.9697 17.0303L5.93945 12L10.9697 6.96976L12.0303 8.0303L8.81055 11.25L21 11.25L21 12.75L8.81055 12.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconpositionleft.displayName = 'Iconpositionleft';

export default Iconpositionleft;
