import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * desc_indent
 * @source figma
 */
const Icondescindent = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M21 6H3V4.5H21V6Z" fill={color} />
      <path d="M21 10.5H13V9H21V10.5Z" fill={color} />
      <path d="M21 19.5H3V18H21V19.5Z" fill={color} />
      <path d="M21 15H13V13.5H21V15Z" fill={color} />
      <path
        d="M6.94799 9.46746L5.77702 8.53L3 11.9987L5.77702 15.4675L6.94799 14.53L5.52193 12.7487H9.96074V11.2487L5.52193 11.2487L6.94799 9.46746Z"
        fill={color}
      />
    </svg>
  );
});

Icondescindent.displayName = 'Icondescindent';

export default Icondescindent;
