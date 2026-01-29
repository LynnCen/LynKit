import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * camera
 * @source figma
 */
const Iconcamera = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.577 6.47434L15.6909 6.81623C15.8271 7.22457 16.2092 7.5 16.6396 7.5H17H20C20.2761 7.5 20.5 7.72386 20.5 8V19C20.5 19.2761 20.2761 19.5 20 19.5H4C3.72386 19.5 3.5 19.2761 3.5 19V8C3.5 7.72386 3.72386 7.5 4 7.5H7H7.36038C7.79081 7.5 8.17295 7.22457 8.30906 6.81623L8.42303 6.47434L9.08114 4.5H14.9189L15.577 6.47434ZM4 6H7L7.77208 3.68377C7.90819 3.27543 8.29033 3 8.72076 3H15.2792C15.7097 3 16.0918 3.27543 16.2279 3.68377L17 6H20C21.1046 6 22 6.89543 22 8V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V8C2 6.89543 2.89543 6 4 6ZM14.5 13C14.5 14.3807 13.3807 15.5 12 15.5C10.6193 15.5 9.5 14.3807 9.5 13C9.5 11.6193 10.6193 10.5 12 10.5C13.3807 10.5 14.5 11.6193 14.5 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z"
        fill={color}
      />
    </svg>
  );
});

Iconcamera.displayName = 'Iconcamera';

export default Iconcamera;
