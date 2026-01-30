import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * automatic_spacing
 * @source figma
 */
const Iconautomaticspacing = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.5 8.5C7.5 7.94772 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5V15.5C5.5 16.0523 5.94772 16.5 6.5 16.5C7.05228 16.5 7.5 16.0523 7.5 15.5V8.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V18C20.5 18.2761 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6C3.5 5.72386 3.72386 5.5 4 5.5Z"
        fill={color}
      />
      <path
        d="M18.5 8.5C18.5 7.94772 18.0523 7.5 17.5 7.5C16.9477 7.5 16.5 7.94772 16.5 8.5V15.5C16.5 16.0523 16.9477 16.5 17.5 16.5C18.0523 16.5 18.5 16.0523 18.5 15.5V8.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconautomaticspacing.displayName = 'Iconautomaticspacing';

export default Iconautomaticspacing;
