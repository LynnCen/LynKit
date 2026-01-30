import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_line
 * @source figma
 */
const Iconshapeline = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3.46967 20.5303C3.17678 20.2374 3.17678 19.7626 3.46967 19.4697L19.4697 3.46967C19.7626 3.17678 20.2374 3.17678 20.5303 3.46967C20.8232 3.76256 20.8232 4.23744 20.5303 4.53033L4.53033 20.5303C4.23744 20.8232 3.76256 20.8232 3.46967 20.5303Z"
        fill={color}
      />
    </svg>
  );
});

Iconshapeline.displayName = 'Iconshapeline';

export default Iconshapeline;
