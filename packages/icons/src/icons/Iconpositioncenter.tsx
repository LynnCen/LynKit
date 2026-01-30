import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * position_center
 * @source figma
 */
const Iconpositioncenter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5.5C3 4.11929 4.11929 3 5.5 3H18.5C19.8807 3 21 4.11929 21 5.5V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5ZM5.5 4.5H11.25V6.99998H12.75V4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V11.25H17V12.75H19.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H12.75V17H11.25V19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V12.75H7V11.25H4.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconpositioncenter.displayName = 'Iconpositioncenter';

export default Iconpositioncenter;
