import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * autolayout_horizontal_center
 * @source figma
 */
const Iconautolayouthorizontalcenter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.75 5C10.75 4.44772 11.1977 4 11.75 4H12.25C12.8023 4 13.25 4.44772 13.25 5V19C13.25 19.5523 12.8023 20 12.25 20H11.75C11.1977 20 10.75 19.5523 10.75 19V5ZM4.5 7C4.5 6.44772 4.94772 6 5.5 6H6C6.55228 6 7 6.44772 7 7V17C7 17.5523 6.55228 18 6 18H5.5C4.94772 18 4.5 17.5523 4.5 17V7ZM18 8C17.4477 8 17 8.44772 17 9V15C17 15.5523 17.4477 16 18 16H18.5C19.0523 16 19.5 15.5523 19.5 15V9C19.5 8.44772 19.0523 8 18.5 8H18Z"
        fill={color}
      />
    </svg>
  );
});

Iconautolayouthorizontalcenter.displayName = 'Iconautolayouthorizontalcenter';

export default Iconautolayouthorizontalcenter;
