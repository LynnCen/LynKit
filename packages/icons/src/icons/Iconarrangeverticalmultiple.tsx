import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrange_vertical_multiple
 * @source figma
 */
const Iconarrangeverticalmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.5 11L17.5 11L17.5 13L6.5 13L6.5 11Z"
        fill={color}
      />
      <path d="M21 20.75H3V19.25H21V20.75ZM21 4.75H3V3.25H21V4.75Z" fill={color} />
    </svg>
  );
});

Iconarrangeverticalmultiple.displayName = 'Iconarrangeverticalmultiple';

export default Iconarrangeverticalmultiple;
