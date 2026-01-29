import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_left
 * @source figma
 */
const Iconarrowleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.4698 4.46973L15.5304 5.53039L9.06077 12.0001L15.5304 18.4697L14.4698 19.5304L6.93945 12.0001L14.4698 4.46973Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowleft.displayName = 'Iconarrowleft';

export default Iconarrowleft;
