import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * full_screen
 * @source figma
 */
const Iconfullscreen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9H21V5C21 3.89543 20.1046 3 19 3H15V4.5ZM9 4.5V3H5C3.89543 3 3 3.89543 3 5V9H4.5V5C4.5 4.72386 4.72386 4.5 5 4.5H9ZM4.5 15H3V19C3 20.1046 3.89543 21 5 21H9V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V15ZM15 19.5V21H19C20.1046 21 21 20.1046 21 19V15H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5H15Z"
        fill={color}
      />
    </svg>
  );
});

Iconfullscreen.displayName = 'Iconfullscreen';

export default Iconfullscreen;
