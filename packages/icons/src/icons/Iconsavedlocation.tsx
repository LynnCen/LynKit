import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * saved_location
 * @source figma
 */
const Iconsavedlocation = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3.75 3C2.92157 3 2.25 3.67157 2.25 4.5V19.5C2.25 20.3284 2.92157 21 3.75 21H20.25C21.0784 21 21.75 20.3284 21.75 19.5V6.375C21.75 5.54657 21.0784 4.875 20.25 4.875L12.8025 4.875L11.9543 3.64735C11.6742 3.24198 11.2129 3 10.7202 3H3.75ZM20.25 9.75L20.25 6.375H12.8025C12.3098 6.375 11.8485 6.13302 11.5684 5.72765L10.7202 4.5H3.75V9.75H20.25ZM3.75 11.25L3.75 19.5L20.25 19.5V11.25H3.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconsavedlocation.displayName = 'Iconsavedlocation';

export default Iconsavedlocation;
