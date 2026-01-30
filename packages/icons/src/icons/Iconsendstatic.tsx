import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * send_static
 * @source figma
 */
const Iconsendstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.2989 3.5599L3.92763 8.28781C2.85801 8.61687 2.66348 10.0468 3.60646 10.6497L8.14798 13.5529C8.38415 13.7038 8.66241 13.7753 8.94208 13.7567C9.22174 13.7382 9.48815 13.6307 9.70235 13.4499L15.3706 8.66677C15.6779 8.4075 16.0926 8.82183 15.8333 9.12942L11.0505 14.7987C10.8698 15.0129 10.7623 15.2793 10.7438 15.5589C10.7254 15.8385 10.7969 16.1167 10.9479 16.3528L13.8504 20.8938C14.4529 21.8364 15.8832 21.6419 16.2123 20.5726L20.9401 5.20145C21.2499 4.19372 20.3063 3.25009 19.2989 3.5599Z"
        fill="url(#paint0_linear_17166_4420)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_17166_4420"
          x1="3"
          y1="12.5"
          x2="21"
          y2="12.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2254F4" />
          <stop offset="1" stopColor="#43BBFF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

Iconsendstatic.displayName = 'Iconsendstatic';

export default Iconsendstatic;
