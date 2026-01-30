import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * group_separate
 * @source figma
 */
const Icongroupseparate = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H19C20.1046 9 21 8.10457 21 7V5C21 3.89543 20.1046 3 19 3H5ZM19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7C4.5 7.27614 4.72386 7.5 5 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7V5C19.5 4.72386 19.2761 4.5 19 4.5Z"
        fill={color}
      />
      <path d="M2.25 12.75H3.75V11.25H2.25V12.75Z" fill={color} />
      <path d="M6.75 12.75H5.25V11.25H6.75V12.75Z" fill={color} />
      <path d="M9.75 12.75H8.25V11.25H9.75V12.75Z" fill={color} />
      <path d="M12.75 12.75H11.25V11.25H12.75V12.75Z" fill={color} />
      <path d="M15.75 12.75H14.25V11.25H15.75V12.75Z" fill={color} />
      <path d="M18.75 12.75H17.25V11.25H18.75V12.75Z" fill={color} />
      <path d="M20.25 12.75V11.25H21.75V12.75H20.25Z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 17C3 15.8954 3.89543 15 5 15H19C20.1046 15 21 15.8954 21 17V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V17ZM5 16.5H19C19.2761 16.5 19.5 16.7239 19.5 17V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V17C4.5 16.7239 4.72386 16.5 5 16.5Z"
        fill={color}
      />
    </svg>
  );
});

Icongroupseparate.displayName = 'Icongroupseparate';

export default Icongroupseparate;
