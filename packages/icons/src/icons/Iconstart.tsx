import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * start
 * @source figma
 */
const Iconstart = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.5 18.3507V5.64929L18.0845 12L7.5 18.3507ZM7.5145 3.9087C6.84797 3.50879 6 3.9889 6 4.76619V19.2338C6 20.0111 6.84797 20.4912 7.5145 20.0913L19.5708 12.8575C20.2182 12.4691 20.2182 11.5309 19.5708 11.1425L7.5145 3.9087Z"
        fill={color}
      />
    </svg>
  );
});

Iconstart.displayName = 'Iconstart';

export default Iconstart;
