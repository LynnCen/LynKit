import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * align_vertical_center_multiple
 * @source figma
 */
const Iconalignverticalcentermultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.25 21L11.25 3L12.75 3L12.75 21L11.25 21Z"
        fill={color}
      />
      <path d="M15.5 16H8.5V14H15.5V16ZM18.5 10H5.5V8H18.5V10Z" fill={color} />
    </svg>
  );
});

Iconalignverticalcentermultiple.displayName = 'Iconalignverticalcentermultiple';

export default Iconalignverticalcentermultiple;
