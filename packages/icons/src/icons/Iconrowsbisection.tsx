import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * rows_bisection
 * @source figma
 */
const Iconrowsbisection = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4ZM20 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V8.5H20.5V5C20.5 4.72386 20.2761 4.5 20 4.5ZM3.5 14V10H20.5V14H3.5ZM3.5 15.5V19C3.5 19.2761 3.72386 19.5 4 19.5H20C20.2761 19.5 20.5 19.2761 20.5 19V15.5H3.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconrowsbisection.displayName = 'Iconrowsbisection';

export default Iconrowsbisection;
