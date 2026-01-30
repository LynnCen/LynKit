import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_close_small
 * @source figma
 */
const Iconhbclosesmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.2929 6.29311C16.6834 5.9026 17.3164 5.90264 17.7069 6.29311C18.0972 6.68365 18.0974 7.31672 17.7069 7.70717L13.414 12.0001L17.7069 16.2931L17.7753 16.3693C18.0954 16.7621 18.073 17.3411 17.7069 17.7072C17.3409 18.0732 16.7618 18.0957 16.369 17.7755L16.2929 17.7072L11.9999 13.4142L7.70693 17.7072L7.63076 17.7755C7.23806 18.0958 6.65899 18.0731 6.29286 17.7072C5.92681 17.3411 5.90419 16.762 6.22451 16.3693L6.29286 16.2931L10.5858 12.0001L6.29286 7.70717C5.9024 7.31664 5.90236 6.68361 6.29286 6.29311C6.68337 5.9026 7.3164 5.90264 7.70693 6.29311L11.9999 10.5861L16.2929 6.29311Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbclosesmall.displayName = 'Iconhbclosesmall';

export default Iconhbclosesmall;
