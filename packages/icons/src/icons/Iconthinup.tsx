import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * thin_up
 * @source figma
 */
const Iconthinup = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0001 3.93933L4.96973 10.9697L6.03039 12.0303L11.2501 6.81065V20H12.7501V6.81065L17.9697 12.0303L19.0304 10.9697L12.0001 3.93933Z"
        fill={color}
      />
    </svg>
  );
});

Iconthinup.displayName = 'Iconthinup';

export default Iconthinup;
