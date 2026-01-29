import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_check_small
 * @source figma
 */
const Iconhbchecksmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.7929 6.79311C18.1834 6.40264 18.8164 6.4026 19.2069 6.79311C19.5973 7.18362 19.5974 7.81668 19.2069 8.20717L10.7069 16.7072C10.513 16.9011 10.2477 17.0073 9.97354 17.0001C9.6994 16.9929 9.44024 16.8729 9.25674 16.6691L4.75674 11.6691C4.3873 11.2586 4.4205 10.6264 4.83096 10.257C5.24145 9.8876 5.87362 9.92076 6.24307 10.3312L10.038 14.547L17.7929 6.79311Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbchecksmall.displayName = 'Iconhbchecksmall';

export default Iconhbchecksmall;
