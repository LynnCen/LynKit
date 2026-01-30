import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * rotate
 * @source figma
 */
const Iconrotate = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10 3.22302C5.99202 4.13248 3 7.71683 3 12C3 16.2832 5.99202 19.8675 10 20.777V19.2304C6.82881 18.3551 4.5 15.4495 4.5 12C4.5 8.55047 6.82881 5.64487 10 4.76962V3.22302ZM14 19.2304C17.1712 18.3551 19.5 15.4495 19.5 12C19.5 8.55047 17.1712 5.64487 14 4.76962V3.22302C18.008 4.13248 21 7.71683 21 12C21 16.2832 18.008 19.8675 14 20.777V19.2304Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25 3.75H5V2.25H10.75V8H9.25V3.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.75 20.25H19V21.75H13.25L13.25 16L14.75 16L14.75 20.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconrotate.displayName = 'Iconrotate';

export default Iconrotate;
