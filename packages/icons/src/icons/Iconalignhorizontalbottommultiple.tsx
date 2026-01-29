import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * align_horizontal_bottom_multiple
 * @source figma
 */
const Iconalignhorizontalbottommultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.5 16.5L10.5 3.5L8.5 3.5L8.5 16.5L10.5 16.5ZM16.5 16.5L16.5 9.5L14.5 9.5L14.5 16.5L16.5 16.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 21.25L3.5 21.25L3.5 19.75L21.5 19.75L21.5 21.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconalignhorizontalbottommultiple.displayName = 'Iconalignhorizontalbottommultiple';

export default Iconalignhorizontalbottommultiple;
