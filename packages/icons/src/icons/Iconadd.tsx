import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * add
 * @source figma
 */
const Iconadd = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.25 12.75V21H12.75V12.75H21V11.25H12.75V3H11.25V11.25H3V12.75H11.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconadd.displayName = 'Iconadd';

export default Iconadd;
