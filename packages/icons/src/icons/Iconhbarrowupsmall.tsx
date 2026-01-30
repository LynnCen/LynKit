import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_arrow_up_small
 * @source figma
 */
const Iconhbarrowupsmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.2929 8.29301C11.6834 7.9025 12.3164 7.90249 12.707 8.29301L18.207 13.793C18.5973 14.1835 18.5974 14.8166 18.207 15.2071C17.8165 15.5975 17.1834 15.5975 16.7929 15.2071L11.9999 10.4141L7.20696 15.2071C6.81648 15.5975 6.18343 15.5975 5.79289 15.2071C5.40237 14.8165 5.40237 14.1835 5.79289 13.793L11.2929 8.29301Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbarrowupsmall.displayName = 'Iconhbarrowupsmall';

export default Iconhbarrowupsmall;
