import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * inspire_static
 * @source figma
 */
const Iconinspirestatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 3C11.0059 3 10.2231 3.8184 9.97783 4.78179C9.32997 7.3266 7.32661 9.32997 4.78179 9.97783C3.8184 10.2231 3 11.0059 3 12C3 12.9941 3.8184 13.7769 4.78179 14.0222C7.32661 14.67 9.32997 16.6734 9.97783 19.2182C10.2231 20.1816 11.0059 21 12 21C12.9941 21 13.7769 20.1816 14.0222 19.2182C14.67 16.6734 16.6734 14.67 19.2182 14.0222C20.1816 13.7769 21 12.9941 21 12C21 11.0059 20.1816 10.2231 19.2182 9.97783C16.6734 9.32997 14.67 7.32661 14.0222 4.78179C13.7769 3.8184 12.9941 3 12 3Z"
        fill="url(#paint0_linear_5057_2788)"
        fillOpacity={0.1}
      />
      <defs>
        <linearGradient
          id="paint0_linear_5057_2788"
          x1="3"
          y1="14.925"
          x2="21"
          y2="14.925"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43BBFF" />
          <stop offset="1" stopColor="#30E2B0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

Iconinspirestatic.displayName = 'Iconinspirestatic';

export default Iconinspirestatic;
