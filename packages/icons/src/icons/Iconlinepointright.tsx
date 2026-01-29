import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_point_right
 * @source figma
 */
const Iconlinepointright = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C16.0472 8 14.4213 9.39935 14.0702 11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H14.0702C14.4213 14.6006 16.0472 16 18 16Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinepointright.displayName = 'Iconlinepointright';

export default Iconlinepointright;
