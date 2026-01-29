import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * align_horizontal_top_multiple
 * @source figma
 */
const Iconalignhorizontaltopmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.5 7.5L10.5 20.5L8.5 20.5L8.5 7.5L10.5 7.5ZM16.5 7.5L16.5 14.5L14.5 14.5L14.5 7.5L16.5 7.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 2.75L3.5 2.75L3.5 4.25L21.5 4.25L21.5 2.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconalignhorizontaltopmultiple.displayName = 'Iconalignhorizontaltopmultiple';

export default Iconalignhorizontaltopmultiple;
