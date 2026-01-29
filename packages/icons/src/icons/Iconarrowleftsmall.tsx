import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_left_small
 * @source figma
 */
const Iconarrowleftsmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.1212 12.0009L15.0908 16.9706L14.0302 18.0312L7.99983 12.0009L14.0302 5.97059L15.0908 7.03125L10.1212 12.0009Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowleftsmall.displayName = 'Iconarrowleftsmall';

export default Iconarrowleftsmall;
