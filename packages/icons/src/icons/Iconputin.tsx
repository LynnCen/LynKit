import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * putin
 * @source figma
 */
const Iconputin = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V14H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5H10V3Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4393 4.5H14V3H20.25C20.6642 3 21 3.33579 21 3.75V10H19.5V5.56071L12.5303 12.5303L11.4697 11.4697L18.4393 4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconputin.displayName = 'Iconputin';

export default Iconputin;
