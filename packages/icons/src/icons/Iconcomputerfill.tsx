import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * computer_fill
 * @source figma
 */
const Iconcomputerfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 17V6H19V17H5ZM3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V18C21 18.5523 20.5523 19 20 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20C1 19.4477 1.44772 19 2 19H4C3.44772 19 3 18.5523 3 18V5Z"
        fill={color}
      />
    </svg>
  );
});

Iconcomputerfill.displayName = 'Iconcomputerfill';

export default Iconcomputerfill;
