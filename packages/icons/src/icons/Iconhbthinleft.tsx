import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_thin_left
 * @source figma
 */
const Iconhbthinleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.2929 5.29311C10.6834 4.90264 11.3164 4.90261 11.707 5.29311C12.0974 5.68363 12.0974 6.31668 11.707 6.70718L7.41399 11.0001H19.9999C20.5522 11.0002 20.9999 11.4479 20.9999 12.0001C20.9999 12.5524 20.5521 13.0001 19.9999 13.0001H7.41399L11.707 17.2931L11.7753 17.3693C12.0956 17.762 12.073 18.3411 11.707 18.7072C11.3409 19.0733 10.7618 19.0958 10.3691 18.7755L10.2929 18.7072L4.29289 12.7072C3.90237 12.3167 3.90237 11.6836 4.29289 11.2931L10.2929 5.29311Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbthinleft.displayName = 'Iconhbthinleft';

export default Iconhbthinleft;
