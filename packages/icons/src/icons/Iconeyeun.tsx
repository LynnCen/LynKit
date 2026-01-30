import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * eye_un
 * @source figma
 */
const Iconeyeun = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.7999 12C21.4052 13.9446 20.4462 15.6842 19.1013 17.0407L18.0407 15.9801C19.1122 14.8981 19.895 13.5297 20.2636 12C19.3648 8.27048 16.0043 5.5 11.9999 5.5C10.7023 5.5 9.47228 5.79092 8.37173 6.31113L7.25552 5.19492C8.6672 4.43267 10.283 4 11.9999 4C16.8378 4 20.8733 7.43552 21.7999 12ZM14.9999 12C14.9999 12.286 14.9599 12.5626 14.8852 12.8246L11.1753 9.11475C11.4373 9.04001 11.714 9 11.9999 9C13.6568 9 14.9999 10.3431 14.9999 12ZM12.8245 14.8853C12.5625 14.96 12.2859 15 11.9999 15C10.3431 15 8.99994 13.6569 8.99994 12C8.99994 11.714 9.03995 11.4374 9.11469 11.1754L5.95916 8.01989C4.88766 9.10192 4.10485 10.4703 3.73619 12C4.63501 15.7295 7.99552 18.5 11.9999 18.5C13.2976 18.5 14.5276 18.2091 15.6281 17.6888L12.8245 14.8853ZM16.7443 18.8051L18.4696 20.5303L19.5303 19.4697L4.53027 4.46967L3.46961 5.53033L4.89859 6.95931C3.55368 8.31574 2.59468 10.0554 2.19995 12C3.12649 16.5645 7.162 20 11.9999 20C13.7168 20 15.3326 19.5673 16.7443 18.8051Z"
        fill={color}
      />
    </svg>
  );
});

Iconeyeun.displayName = 'Iconeyeun';

export default Iconeyeun;
