import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * pin_fill
 * @source figma
 */
const Iconpinfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4.5 16.5V4.5H16.5V8H18V4C18 3.44772 17.5523 3 17 3H4C3.44772 3 3 3.44772 3 4V17C3 17.5523 3.44772 18 4 18H8V16.5H4.5Z"
        fill={color}
      />
      <path
        d="M10.2184 9.28251C9.95341 9.20187 9.66555 9.27383 9.46969 9.46969C9.27383 9.66555 9.20187 9.95341 9.28251 10.2184L12.4779 20.7175C12.5741 21.0335 12.8657 21.2494 13.196 21.2492C13.5263 21.2489 13.8175 21.0326 13.9132 20.7165L15.4944 15.4943L20.7165 13.9132C21.0326 13.8175 21.2489 13.5262 21.2492 13.1959C21.2494 12.8656 21.0335 12.5741 20.7175 12.4779L10.2184 9.28251Z"
        fill={color}
      />
    </svg>
  );
});

Iconpinfill.displayName = 'Iconpinfill';

export default Iconpinfill;
