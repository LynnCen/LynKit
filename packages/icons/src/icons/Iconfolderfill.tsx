import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * folder_fill
 * @source figma
 */
const Iconfolderfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.7742 5.5L10.1781 3.68093C9.79837 3.24814 9.25053 3 8.67476 3H4C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V7.5C22 6.39543 21.1046 5.5 20 5.5H11.7742Z"
        fill={color}
      />
    </svg>
  );
});

Iconfolderfill.displayName = 'Iconfolderfill';

export default Iconfolderfill;
