import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_down_small
 * @source figma
 */
const Iconarrowdownsmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0303 13.5696L7.06066 8.59998L6 9.66064L12.0303 15.691L18.0607 9.66064L17 8.59998L12.0303 13.5696Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowdownsmall.displayName = 'Iconarrowdownsmall';

export default Iconarrowdownsmall;
