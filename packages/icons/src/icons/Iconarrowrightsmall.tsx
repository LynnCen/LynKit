import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_right_small
 * @source figma
 */
const Iconarrowrightsmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.8796 12.0302L8.90991 16.9999L9.97057 18.0605L16.0009 12.0302L9.97057 5.99989L8.90991 7.06055L13.8796 12.0302Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowrightsmall.displayName = 'Iconarrowrightsmall';

export default Iconarrowrightsmall;
