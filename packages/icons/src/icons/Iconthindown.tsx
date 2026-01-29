import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * thin_down
 * @source figma
 */
const Iconthindown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.7501 17.1893L17.9697 11.9697L19.0304 13.0303L12.0001 20.0607L4.96973 13.0303L6.03039 11.9697L11.2501 17.1893V4H12.7501V17.1893Z"
        fill={color}
      />
    </svg>
  );
});

Iconthindown.displayName = 'Iconthindown';

export default Iconthindown;
