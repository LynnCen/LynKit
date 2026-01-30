import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * thin_right
 * @source figma
 */
const Iconthinright = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.1893 12.7501H4V11.2501H17.1893L11.9697 6.03039L13.0303 4.96973L20.0607 12.0001L13.0303 19.0304L11.9697 17.9697L17.1893 12.7501Z"
        fill={color}
      />
    </svg>
  );
});

Iconthinright.displayName = 'Iconthinright';

export default Iconthinright;
