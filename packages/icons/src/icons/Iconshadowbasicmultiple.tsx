import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shadow_basic_multiple
 * @source figma
 */
const Iconshadowbasicmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        opacity="0.6"
        d="M19 7C19.5523 7 20 7.44772 20 8V19C20 19.5523 19.5523 20 19 20H15C15.5523 20 16 19.5523 16 19V7H19Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 5.5V18.5H14.5V5.5H5.5ZM4 5C4 4.44772 4.44772 4 5 4H15C15.5523 4 16 4.44772 16 5V19C16 19.5523 15.5523 20 15 20H5C4.44772 20 4 19.5523 4 19V5Z"
        fill={color}
      />
    </svg>
  );
});

Iconshadowbasicmultiple.displayName = 'Iconshadowbasicmultiple';

export default Iconshadowbasicmultiple;
