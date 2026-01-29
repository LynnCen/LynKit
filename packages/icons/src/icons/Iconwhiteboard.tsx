import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * whiteboard
 * @source figma
 */
const Iconwhiteboard = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.64752 12.9443C7.23198 12.0493 7.00003 11.0517 7.00003 10C7.00003 6.13401 10.134 3 14 3C17.866 3 21 6.13401 21 10C21 13.3198 18.689 16.0998 15.588 16.8191L17.5674 20.2501C17.7597 20.5835 17.5192 21 17.1343 21H3.86574C3.48091 21 3.24034 20.5835 3.43264 20.2501L7.64752 12.9443ZM19.5 10C19.5 12.7679 17.4554 15.0582 14.7941 15.4431L10.9331 8.75069C10.7407 8.41718 10.2594 8.41718 10.0669 8.75069L8.63766 11.2281C8.5476 10.8332 8.50003 10.4222 8.50003 10C8.50003 6.96243 10.9625 4.5 14 4.5C17.0376 4.5 19.5 6.96243 19.5 10ZM5.59715 19.5L10.5 11.0017L15.4029 19.5H5.59715Z"
        fill={color}
      />
    </svg>
  );
});

Iconwhiteboard.displayName = 'Iconwhiteboard';

export default Iconwhiteboard;
