import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * android_fill
 * @source figma
 */
const Iconandroidfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6 18C6 18.55 6.45 19 7 19H8V22.75C8 23.4404 8.55964 24 9.25 24C9.94036 24 10.5 23.4404 10.5 22.75V19H13.5V22.75C13.5 23.4404 14.0596 24 14.75 24C15.4404 24 16 23.4404 16 22.75V19H17C17.55 19 18 18.55 18 18V8H6V18ZM3.25 8.5C2.55964 8.5 2 9.05964 2 9.75V17.25C2 17.9404 2.55964 18.5 3.25 18.5C3.94036 18.5 4.5 17.9404 4.5 17.25V9.75C4.5 9.05964 3.94036 8.5 3.25 8.5ZM20.75 8.5C20.0596 8.5 19.5 9.05964 19.5 9.75V17.25C19.5 17.9404 20.0596 18.5 20.75 18.5C21.4404 18.5 22 17.9404 22 17.25V9.75C22 9.05964 21.4404 8.5 20.75 8.5ZM16.83 0.86C17.03 0.66 17.03 0.35 16.83 0.15C16.63 -0.05 16.32 -0.05 16.12 0.15L14.64 1.63C13.85 1.23 12.95 1 12 1C11.04 1 10.14 1.23 9.34 1.63L7.85 0.15C7.65 -0.05 7.34 -0.05 7.14 0.15C6.94 0.35 6.94 0.66 7.14 0.86L8.45 2.17C6.97 3.26 6 5.01 6 7H18C18 5.01 17.03 3.25 15.53 2.16L16.83 0.86ZM10.5 4.75C10.5 5.16421 10.1642 5.5 9.75 5.5C9.33579 5.5 9 5.16421 9 4.75C9 4.33579 9.33579 4 9.75 4C10.1642 4 10.5 4.33579 10.5 4.75ZM15 4.75C15 5.16421 14.6642 5.5 14.25 5.5C13.8358 5.5 13.5 5.16421 13.5 4.75C13.5 4.33579 13.8358 4 14.25 4C14.6642 4 15 4.33579 15 4.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconandroidfill.displayName = 'Iconandroidfill';

export default Iconandroidfill;
