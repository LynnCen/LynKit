import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * stroke_solid_fill
 * @source figma
 */
const Iconstrokesolidfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M1 11.75C1 11.3358 1.33579 11 1.75 11L22.25 11C22.6642 11 23 11.3358 23 11.75C23 12.1642 22.6642 12.5 22.25 12.5L1.75 12.5C1.33579 12.5 1 12.1642 1 11.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconstrokesolidfill.displayName = 'Iconstrokesolidfill';

export default Iconstrokesolidfill;
