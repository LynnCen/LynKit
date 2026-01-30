import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * vip_exclusive
 * @source figma
 */
const Iconvipexclusive = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 6.5C12.6904 6.5 13.25 5.94036 13.25 5.25C13.25 4.55964 12.6904 4 12 4C11.3096 4 10.75 4.55964 10.75 5.25C10.75 5.94036 11.3096 6.5 12 6.5ZM5.81467 19.2316L3.76042 10.6038C3.65973 10.1809 4.10949 9.83981 4.48957 10.0509L7.99957 12L11.5995 7.26666C11.7995 7.00366 12.1951 7.00354 12.3952 7.26643L15.9996 12L19.5054 10.0515C19.8855 9.84027 20.3354 10.1813 20.2347 10.6044L18.1806 19.2316C18.0733 19.6821 17.6708 20 17.2078 20H6.78748C6.32442 20 5.92193 19.6821 5.81467 19.2316ZM15.4998 15.9999H13.5305L12.7068 15.0321V17.4H11.1887V14.9927L10.3381 15.9999H8.5L11.9429 12L15.4998 15.9999ZM8.98658 17.5999H8.98684L8.98675 17.6L8.98658 17.5999ZM4.5 8.25C4.5 8.94036 3.94036 9.5 3.25 9.5C2.55964 9.5 2 8.94036 2 8.25C2 7.55964 2.55964 7 3.25 7C3.94036 7 4.5 7.55964 4.5 8.25ZM20.75 9.5C21.4404 9.5 22 8.94036 22 8.25C22 7.55964 21.4404 7 20.75 7C20.0596 7 19.5 7.55964 19.5 8.25C19.5 8.94036 20.0596 9.5 20.75 9.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconvipexclusive.displayName = 'Iconvipexclusive';

export default Iconvipexclusive;
