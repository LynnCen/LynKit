import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_triangle_left_fill
 * @source figma
 */
const Iconlinetriangleleftfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2 15.9325C2 16.3564 2.49443 16.588 2.82009 16.3166L7.1 12.75H21.25C21.6642 12.75 22 12.4142 22 12C22 11.5858 21.6642 11.25 21.25 11.25H7.1L2.82009 7.6834C2.49443 7.41202 2 7.6436 2 8.06751V15.9325Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinetriangleleftfill.displayName = 'Iconlinetriangleleftfill';

export default Iconlinetriangleleftfill;
