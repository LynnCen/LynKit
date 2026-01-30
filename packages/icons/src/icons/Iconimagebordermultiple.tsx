import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * image_border_multiple
 * @source figma
 */
const Iconimagebordermultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5L5 4.5C4.72386 4.5 4.5 4.72386 4.5 5L4.5 19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19ZM21 5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5Z"
        fill={color}
      />
      <path
        d="M18.269 6.75V12.1786H16.769V8.46423L13.4114 11.8219L12.3507 10.7613L15.612 7.5H12.269V6L17.519 6C17.9333 6 18.269 6.33579 18.269 6.75Z"
        fill={color}
      />
      <path
        d="M10.8764 12.3558L11.937 13.4165L8.65709 16.6964H12V18.1964H6.75C6.33579 18.1964 6 17.8606 6 17.4464L6 12.0178H7.5V15.7322L10.8764 12.3558Z"
        fill={color}
      />
    </svg>
  );
});

Iconimagebordermultiple.displayName = 'Iconimagebordermultiple';

export default Iconimagebordermultiple;
