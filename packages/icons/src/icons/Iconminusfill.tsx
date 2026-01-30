import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * minus_fill
 * @source figma
 */
const Iconminusfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711ZM16.5778 13.079H7.42215V10.921H16.5778V13.079Z"
        fill={color}
      />
    </svg>
  );
});

Iconminusfill.displayName = 'Iconminusfill';

export default Iconminusfill;
