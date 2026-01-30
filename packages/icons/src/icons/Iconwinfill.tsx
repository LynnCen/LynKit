import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * win_fill
 * @source figma
 */
const Iconwinfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2 12H10.3333V3.61111L2 4.77778V12ZM2 19.2222L10.3333 20.3889V12.5556H2V19.2222ZM10.8889 20.4444L22 22V12.5556H10.8889V20.4444ZM10.8889 3.55556V12H22V2L10.8889 3.55556Z"
        fill={color}
      />
    </svg>
  );
});

Iconwinfill.displayName = 'Iconwinfill';

export default Iconwinfill;
