import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_up
 * @source figma
 */
const Iconarrowup = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.9999 9.62127L18.4696 16.0909L19.5303 15.0303L11.9999 7.49995L4.46961 15.0303L5.53027 16.0909L11.9999 9.62127Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowup.displayName = 'Iconarrowup';

export default Iconarrowup;
