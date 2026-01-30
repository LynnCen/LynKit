import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_chevrons_left
 * @source figma
 */
const Iconarrowchevronsleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.98028 11.4545L5.44995 11.9848L5.98028 12.5151L10.4803 17.0151L11.5409 15.9545L7.57127 11.9848L11.5409 8.01514L10.4803 6.95448L5.98028 11.4545ZM11.9803 11.4545L11.45 11.9848L11.9803 12.5151L16.4803 17.0151L17.5409 15.9545L13.5713 11.9848L17.5409 8.01514L16.4803 6.95448L11.9803 11.4545Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowchevronsleft.displayName = 'Iconarrowchevronsleft';

export default Iconarrowchevronsleft;
