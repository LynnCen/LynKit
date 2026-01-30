import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * canva
 * @source figma
 */
const Iconcanva = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.0498 3H5.5498V5.5H3.0498V7H5.5498V17H3.0498V18.5H5.5498V21H7.0498V18.5L17.0498 18.5V21H18.5498V18.5H21.0498V17H18.5498V7H21.0498V5.5H18.5498V3H17.0498V5.5L7.0498 5.5V3ZM7.0498 7V17L17.0498 17V7L7.0498 7Z"
        fill={color}
      />
    </svg>
  );
});

Iconcanva.displayName = 'Iconcanva';

export default Iconcanva;
