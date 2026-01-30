import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * layerdown
 * @source figma
 */
const Iconlayerdown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.8677 8.50004L12.7192 4.60048C12.2715 4.35626 11.7303 4.35624 11.2826 4.60042L4.13269 8.49999L9.0009 11.1552V12.8638L2.93156 9.55348C2.09768 9.09867 2.09768 7.90129 2.93157 7.44649L10.5644 3.28355C11.4598 2.79517 12.5421 2.79522 13.4375 3.28366L21.0688 7.44658C21.9026 7.90142 21.9026 9.09866 21.0688 9.55349L15.0009 12.8636V11.1549L19.8677 8.50004ZM12.5149 20.5455L16.5149 16.7713L15.4854 15.6803L12.7501 18.2612L12.7501 8.50004H11.2501L11.2501 18.2612L8.51485 15.6803L7.48544 16.7713L11.4854 20.5455L12.0001 21.0312L12.5149 20.5455Z"
        fill={color}
      />
    </svg>
  );
});

Iconlayerdown.displayName = 'Iconlayerdown';

export default Iconlayerdown;
