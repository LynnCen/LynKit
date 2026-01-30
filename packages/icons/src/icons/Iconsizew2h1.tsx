import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w2_h1
 * @source figma
 */
const Iconsizew2h1 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.5 9H4.5V15H19.5V9ZM3 7.5V16.5H21V7.5H3Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew2h1.displayName = 'Iconsizew2h1';

export default Iconsizew2h1;
