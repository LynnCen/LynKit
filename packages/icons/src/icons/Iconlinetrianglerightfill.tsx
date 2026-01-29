import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_triangle_right_fill
 * @source figma
 */
const Iconlinetrianglerightfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M22 15.9325C22 16.3564 21.5056 16.588 21.1799 16.3166L16.9 12.75H2.75C2.33579 12.75 2 12.4142 2 12C2 11.5858 2.33579 11.25 2.75 11.25H16.9L21.1799 7.6834C21.5056 7.41202 22 7.6436 22 8.06751V15.9325Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinetrianglerightfill.displayName = 'Iconlinetrianglerightfill';

export default Iconlinetrianglerightfill;
