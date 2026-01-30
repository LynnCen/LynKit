import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * diamond
 * @source figma
 */
const Icondiamond = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.1966 4.12988C18.4128 4.1572 18.6085 4.27802 18.7298 4.46289L21.7816 9.11523C21.9672 9.3984 21.9398 9.77112 21.7151 10.0244L12.5608 20.3379C12.4185 20.498 12.2136 20.5898 11.9993 20.5898C11.7852 20.5897 11.581 20.498 11.4388 20.3379L2.28448 10.0244C2.05978 9.77121 2.03263 9.39841 2.21807 9.11523L5.26983 4.46289L5.3255 4.3877C5.46685 4.22169 5.67568 4.12416 5.89679 4.12402H18.1028L18.1966 4.12988ZM11.9866 17.8301L15.1351 10.0518H8.80987L11.9866 17.8301ZM16.7532 10.0518L14.2982 16.1182L19.6829 10.0518H16.7532ZM9.63995 16.0508L7.18975 10.0518H4.31475L9.63995 16.0508ZM17.3597 8.55176H19.6175L18.221 6.42188L17.3597 8.55176ZM4.38018 8.55176H6.57745L5.7337 6.4873L4.38018 8.55176ZM8.19757 8.55176H15.7415L16.9261 5.62402H7.00225L8.19757 8.55176Z"
        fill="black"
      />
    </svg>
  );
});

Icondiamond.displayName = 'Icondiamond';

export default Icondiamond;
