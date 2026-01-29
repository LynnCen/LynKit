import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * rectanglemark_multiple
 * @source figma
 */
const Iconrectanglemarkmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.42857 0C1.53502 0 0 1.53502 0 3.42857V20.5714C0 22.465 1.53502 24 3.42857 24H20.5714C22.465 24 24 22.465 24 20.5714V3.42857C24 1.53502 22.465 0 20.5714 0H3.42857ZM18 6H6V18H18V6Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 6.5H6.5V17.5H17.5V6.5ZM5 5V19H19V5H5Z"
        fill={color}
      />
    </svg>
  );
});

Iconrectanglemarkmultiple.displayName = 'Iconrectanglemarkmultiple';

export default Iconrectanglemarkmultiple;
