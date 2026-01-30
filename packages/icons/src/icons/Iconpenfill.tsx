import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * pen_fill
 * @source figma
 */
const Iconpenfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.793 3.44977C17.7693 2.47346 19.3522 2.47346 20.3286 3.44977C21.3049 4.42608 21.3049 6.009 20.3286 6.98531L19.2679 8.04597L15.7324 4.51043L16.793 3.44977ZM5.46146 14.7813L14.6717 5.57109L18.2072 9.10663L8.99699 18.3169C9.00159 17.8631 8.83077 17.4078 8.48452 17.0616C8.13827 16.7153 7.68302 16.5445 7.22922 16.5491C7.23383 16.0953 7.063 15.6401 6.71675 15.2938C6.3705 14.9476 5.91525 14.7767 5.46146 14.7813ZM4.41866 15.8241L3.42995 20.1085C3.39672 20.2525 3.52579 20.3816 3.6698 20.3484L7.95419 19.3597L4.41866 15.8241Z"
        fill={color}
      />
    </svg>
  );
});

Iconpenfill.displayName = 'Iconpenfill';

export default Iconpenfill;
