import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * strikethrough
 * @source figma
 */
const Iconstrikethrough = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M5 4.5H11.25V10.5H3V12H21V10.5H12.75V4.5H19V3H5V4.5Z" fill={color} />
      <path d="M11.25 13.5V21H12.75V13.5H11.25Z" fill={color} />
    </svg>
  );
});

Iconstrikethrough.displayName = 'Iconstrikethrough';

export default Iconstrikethrough;
