import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * calendar
 * @source figma
 */
const Iconcalendar = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M8.25 2V4H15.75V2H17.25V4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H6.75V2H8.25ZM5 5.5C4.72386 5.5 4.5 5.72386 4.5 6V8.75H19.5V6C19.5 5.72386 19.2761 5.5 19 5.5H5ZM4.5 10.25V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V10.25H4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconcalendar.displayName = 'Iconcalendar';

export default Iconcalendar;
