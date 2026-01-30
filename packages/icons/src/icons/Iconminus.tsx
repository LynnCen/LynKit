import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * minus
 * @source figma
 */
const Iconminus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M12.75 12.75H21V11.25H12.75H11.25H3V12.75H11.25H12.75Z" fill={color} />
    </svg>
  );
});

Iconminus.displayName = 'Iconminus';

export default Iconminus;
