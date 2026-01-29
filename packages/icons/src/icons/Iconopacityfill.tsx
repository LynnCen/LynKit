import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * opacity_fill
 * @source figma
 */
const Iconopacityfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3C3.89543 3 3 3.89543 3 5V6.6H6.6V3H5ZM6.6 6.6V10.2H10.2V6.6H6.6ZM10.2 6.6H13.8V3H10.2V6.6ZM13.8 6.6V10.2H17.4V6.6H13.8ZM17.4 6.6H21V5C21 3.89543 20.1046 3 19 3H17.4V6.6ZM17.4 10.2V13.8H21V10.2H17.4ZM17.4 13.8H13.8V17.4H17.4V13.8ZM17.4 17.4V21H19C20.1046 21 21 20.1046 21 19V17.4H17.4ZM13.8 17.4H10.2V21H13.8V17.4ZM10.2 17.4V13.8H6.6V17.4H10.2ZM6.6 17.4H3V19C3 20.1046 3.89543 21 5 21H6.6V17.4ZM6.6 13.8V10.2H3V13.8H6.6ZM10.2 13.8H13.8V10.2H10.2V13.8Z"
        fill={color}
      />
    </svg>
  );
});

Iconopacityfill.displayName = 'Iconopacityfill';

export default Iconopacityfill;
