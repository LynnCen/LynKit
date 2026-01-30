import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * subtitle
 * @source figma
 */
const Iconsubtitle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.25 14.9998C6.83579 14.9998 6.5 15.3355 6.5 15.7498C6.5 16.164 6.83579 16.4998 7.25 16.4998H16.75C17.1642 16.4998 17.5 16.164 17.5 15.7498C17.5 15.3355 17.1642 14.9998 16.75 14.9998H7.25Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconsubtitle.displayName = 'Iconsubtitle';

export default Iconsubtitle;
