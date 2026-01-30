import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * align_horizontal_middle_multiple
 * @source figma
 */
const Iconalignhorizontalmiddlemultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21 11.25L3 11.25L3 12.75L21 12.75L21 11.25Z"
        fill={color}
      />
      <path d="M10 5.5V18.5H8V5.5H10ZM16 8.5V15.5H14V8.5H16Z" fill={color} />
    </svg>
  );
});

Iconalignhorizontalmiddlemultiple.displayName = 'Iconalignhorizontalmiddlemultiple';

export default Iconalignhorizontalmiddlemultiple;
