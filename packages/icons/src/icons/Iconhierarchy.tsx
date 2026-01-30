import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hierarchy
 * @source figma
 */
const Iconhierarchy = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 3C3 2.44772 3.44772 2 4 2H10C10.5523 2 11 2.44772 11 3V7C11 7.55228 10.5523 8 10 8H7.75V11.25H12V9C12 8.44772 12.4477 8 13 8H19C19.5523 8 20 8.44772 20 9V13C20 13.5523 19.5523 14 19 14H13C12.4477 14 12 13.5523 12 13V12.75H7.75V18.25H12V17C12 16.4477 12.4477 16 13 16H19C19.5523 16 20 16.4477 20 17V21C20 21.5523 19.5523 22 19 22H13C12.4477 22 12 21.5523 12 21V19.75H7C6.58579 19.75 6.25 19.4142 6.25 19V8H4C3.44772 8 3 7.55228 3 7V3ZM9.5 3.5H4.5V6.5H9.5V3.5ZM18.5 9.5H13.5V12.5H18.5V9.5ZM18.5 17.5H13.5V20.5H18.5V17.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconhierarchy.displayName = 'Iconhierarchy';

export default Iconhierarchy;
