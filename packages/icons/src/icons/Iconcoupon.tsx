import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * coupon
 * @source figma
 */
const Iconcoupon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.0654 2C10.2877 2.86232 11.0683 3.5 12 3.5C12.9317 3.5 13.7123 2.86232 13.9346 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H13.9346C13.7123 21.1377 12.9317 20.5 12 20.5C11.0683 20.5 10.2877 21.1377 10.0654 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H10.0654ZM5.5 7.75H6.86621V9.25H5.5V20.5H9.13379C9.76472 19.5956 10.8091 19 12 19C13.1909 19 14.2353 19.5956 14.8662 20.5H18.5V9.25H17.1338V7.75H18.5V3.5H14.8662C14.2353 4.40444 13.1909 5 12 5C10.8091 5 9.76472 4.40444 9.13379 3.5H5.5V7.75ZM11.5332 9.25H7.7998V7.75H11.5332V9.25ZM16.2002 9.25H12.4668V7.75H16.2002V9.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconcoupon.displayName = 'Iconcoupon';

export default Iconcoupon;
