import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w3_h2
 * @source figma
 */
const Iconsizew3h2 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.5 7.5H4.5V16.5H19.5V7.5ZM3 6V18H21V6H3Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew3h2.displayName = 'Iconsizew3h2';

export default Iconsizew3h2;
