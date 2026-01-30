import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * align_vertical_right_multiple
 * @source figma
 */
const Iconalignverticalrightmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M17 14V16H10V14H17ZM17 8V10H4V8H17Z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.75 21L21.75 3L20.25 3L20.25 21L21.75 21Z"
        fill={color}
      />
    </svg>
  );
});

Iconalignverticalrightmultiple.displayName = 'Iconalignverticalrightmultiple';

export default Iconalignverticalrightmultiple;
