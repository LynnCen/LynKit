import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * stroke_dash_fill
 * @source figma
 */
const Iconstrokedashfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M6.5 12.75H1V11.25H6.5V12.75Z" fill={color} />
      <path d="M17.5 11.25H23V12.75H17.5V11.25Z" fill={color} />
      <path d="M9.5 12.75H14.5V11.25H9.5V12.75Z" fill={color} />
    </svg>
  );
});

Iconstrokedashfill.displayName = 'Iconstrokedashfill';

export default Iconstrokedashfill;
