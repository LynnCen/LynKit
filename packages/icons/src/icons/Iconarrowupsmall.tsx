import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_up_small
 * @source figma
 */
const Iconarrowupsmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0302 10.4304L16.9999 15.4L18.0605 14.3394L12.0302 8.30903L5.99989 14.3394L7.06055 15.4L12.0302 10.4304Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowupsmall.displayName = 'Iconarrowupsmall';

export default Iconarrowupsmall;
