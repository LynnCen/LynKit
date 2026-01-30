import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * width_fit
 * @source figma
 */
const Iconwidthfit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.99981 4.5H17.9998C18.2759 4.5 18.4998 4.72386 18.4998 5V7H19.9998V5C19.9998 3.89543 19.1044 3 17.9998 3H5.99981C4.89524 3 3.99981 3.89543 3.99981 5V7H5.49981V5C5.49981 4.72386 5.72366 4.5 5.99981 4.5Z"
        fill={color}
      />
      <path
        d="M5.49981 17H3.99981V19C3.99981 20.1046 4.89524 21 5.99981 21H17.9998C19.1044 21 19.9998 20.1046 19.9998 19V17H18.4998V19C18.4998 19.2761 18.2759 19.5 17.9998 19.5H5.99981C5.72366 19.5 5.49981 19.2761 5.49981 19V17Z"
        fill={color}
      />
      <path
        d="M3.81608 15.4687L1.03906 12L3.81608 8.53127L4.98705 9.46873L3.56099 11.25H7.99981L7.99981 12.75H3.56099L4.98705 14.5313L3.81608 15.4687Z"
        fill={color}
      />
      <path
        d="M20.1835 15.4687L19.0126 14.5313L20.4386 12.75H15.9998V11.25H20.4386L19.0126 9.46873L20.1835 8.53127L22.9606 12L20.1835 15.4687Z"
        fill={color}
      />
    </svg>
  );
});

Iconwidthfit.displayName = 'Iconwidthfit';

export default Iconwidthfit;
