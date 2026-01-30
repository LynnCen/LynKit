import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * section
 * @source figma
 */
const Iconsection = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6ZM18 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V8.25H18.5V4C18.5 3.72386 18.2761 3.5 18 3.5ZM5.5 14.25V9.75H18.5V14.25H5.5ZM5.5 15.75V20C5.5 20.2761 5.72386 20.5 6 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V15.75H5.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconsection.displayName = 'Iconsection';

export default Iconsection;
