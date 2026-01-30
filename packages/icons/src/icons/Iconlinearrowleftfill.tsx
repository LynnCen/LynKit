import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_arrow_left_fill
 * @source figma
 */
const Iconlinearrowleftfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.67836 11.576L8.70248 7.81092C9.11249 7.55466 9.61128 7.97169 9.43171 8.42061L8.29996 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H8.29996L9.43171 15.5794C9.61128 16.0283 9.11248 16.4453 8.70247 16.1891L2.67836 12.424C2.36503 12.2282 2.36503 11.7718 2.67836 11.576Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinearrowleftfill.displayName = 'Iconlinearrowleftfill';

export default Iconlinearrowleftfill;
