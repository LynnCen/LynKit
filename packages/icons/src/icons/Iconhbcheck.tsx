import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_check
 * @source figma
 */
const Iconhbcheck = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.0304 9.92648L11.4695 15.4871C11.2819 15.6747 11.0274 15.7801 10.7621 15.78C10.4969 15.7799 10.2425 15.6744 10.0549 15.4867L6.96868 12.3973C6.57836 12.0066 6.57868 11.3735 6.9694 10.9831C7.36012 10.5928 7.99328 10.5931 8.38361 10.9838L10.7628 13.3654L15.6162 8.51224C16.0067 8.12172 16.6399 8.12174 17.0304 8.51227C17.4209 8.9028 17.4209 9.53597 17.0304 9.92648Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbcheck.displayName = 'Iconhbcheck';

export default Iconhbcheck;
