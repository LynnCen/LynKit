import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ungroup
 * @source figma
 */
const Iconungroup = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.2852 15.7754L18.8105 18.25L21.2852 20.7246L20.2246 21.7852L17.75 19.3105L15.2754 21.7852L14.2148 20.7246L16.6895 18.25L14.2148 15.7754L15.2754 14.7148L17.75 17.1895L20.2246 14.7148L21.2852 15.7754ZM4.5 19C4.5 19.2761 4.72386 19.5 5 19.5H9V21H5C3.89543 21 3 20.1046 3 19V17H4.5V19ZM4.5 14H3V10H4.5V14ZM19 3C20.1046 3 21 3.89543 21 5V9H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5H17V3H19ZM7 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7H3V5C3 3.89543 3.89543 3 5 3H7V4.5ZM14 4.5H10V3H14V4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconungroup.displayName = 'Iconungroup';

export default Iconungroup;
