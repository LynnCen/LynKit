import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_arrow
 * @source figma
 */
const Iconshapearrow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.63867 5C9.22446 5 8.88867 4.66421 8.88867 4.25C8.88867 3.83579 9.22446 3.5 9.63867 3.5H19.75C20.1642 3.5 20.5 3.83579 20.5 4.25V14.3613C20.5 14.7755 20.1642 15.1113 19.75 15.1113C19.3358 15.1113 19 14.7755 19 14.3613V6.06066L4.78033 20.2803C4.48744 20.5732 4.01256 20.5732 3.71967 20.2803C3.42678 19.9874 3.42678 19.5126 3.71967 19.2197L17.9393 5H9.63867Z"
        fill={color}
      />
    </svg>
  );
});

Iconshapearrow.displayName = 'Iconshapearrow';

export default Iconshapearrow;
