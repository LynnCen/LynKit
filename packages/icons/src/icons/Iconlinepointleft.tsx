import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_point_left
 * @source figma
 */
const Iconlinepointleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.9298 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H9.9298C9.57875 14.6006 7.95279 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.95279 8 9.57875 9.39935 9.9298 11.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinepointleft.displayName = 'Iconlinepointleft';

export default Iconlinepointleft;
