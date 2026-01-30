import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * synchronize
 * @source figma
 */
const Iconsynchronize = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C9.927 19.5 8.05043 18.659 6.69289 17.2995L5.557 18.2839C7.19153 19.9596 9.47426 21 12 21C16.9706 21 21 16.9706 21 12H23L20.1795 8.0625L17.359 12H19.5Z"
        fill={color}
      />
      <path
        d="M3 12H1L3.82051 15.9375L6.64103 12H4.5C4.5 7.85786 7.85786 4.5 12 4.5C14.3449 4.5 16.4384 5.57611 17.8137 7.26143L18.9477 6.27865C17.297 4.27642 14.7976 3 12 3C7.02944 3 3 7.02944 3 12Z"
        fill={color}
      />
    </svg>
  );
});

Iconsynchronize.displayName = 'Iconsynchronize';

export default Iconsynchronize;
