import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * position_top
 * @source figma
 */
const Iconpositiontop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20 3H4V4.5H20V3ZM12.75 8.81055L15.9697 12.0303L17.0303 10.9697L12 5.93945L6.96973 10.9697L8.03027 12.0303L11.25 8.81055V21H12.75V8.81055Z"
        fill={color}
      />
    </svg>
  );
});

Iconpositiontop.displayName = 'Iconpositiontop';

export default Iconpositiontop;
