import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * customize_filled
 * @source figma
 */
const Iconcustomizefilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.50781 3.00781H18.4922C19.8729 3.00781 20.9922 4.1271 20.9922 5.50781V18.4922C20.9922 19.8729 19.8729 20.9922 18.4922 20.9922H15.834V10.5507C15.834 9.72473 15.834 9.31176 15.6758 8.99519C15.5306 8.70462 15.295 8.46903 15.0045 8.32384C14.6879 8.16566 14.2749 8.16566 13.449 8.16566H3.00781V5.50781C3.00781 4.1271 4.1271 3.00781 5.50781 3.00781Z"
        fill={color}
      />
      <path
        d="M3.00781 13.3687V9.66566H13.449C13.8863 9.66566 14.1256 9.66679 14.2976 9.68061L14.3174 9.6823L14.3191 9.70207C14.3329 9.8741 14.334 10.1134 14.334 10.5507V20.9922H10.6309V15.7537C10.6309 14.9277 10.6309 14.5148 10.4728 14.1982C10.3276 13.9076 10.092 13.672 9.80141 13.5268C9.48484 13.3687 9.07187 13.3687 8.24594 13.3687H3.00781Z"
        fill={color}
      />
      <path
        d="M9.13094 20.9922H5.50781C4.1271 20.9922 3.00781 19.8729 3.00781 18.4922V14.8687H8.24594C8.68323 14.8687 8.9225 14.8698 9.09453 14.8836L9.1143 14.8853L9.11599 14.9051C9.12981 15.0771 9.13094 15.3164 9.13094 15.7537V20.9922Z"
        fill={color}
      />
    </svg>
  );
});

Iconcustomizefilled.displayName = 'Iconcustomizefilled';

export default Iconcustomizefilled;
