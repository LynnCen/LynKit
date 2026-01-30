import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size_w16_h9
 * @source figma
 */
const Iconsizew16h9 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.3881 8.5H4.61035V15.5H19.3881V8.5ZM3.11035 7V17H20.8881V7H3.11035Z"
        fill={color}
      />
    </svg>
  );
});

Iconsizew16h9.displayName = 'Iconsizew16h9';

export default Iconsizew16h9;
