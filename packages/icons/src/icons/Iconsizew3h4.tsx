import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w3_h4
 * @source figma
 */
const Iconsizew3h4 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.5 18.5L16.5 5.5L7.5 5.5L7.5 18.5L16.5 18.5ZM18 4L6 4L6 20L18 20L18 4Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew3h4.displayName = 'Iconsizew3h4';

export default Iconsizew3h4;
