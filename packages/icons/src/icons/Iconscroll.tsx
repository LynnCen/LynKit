import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * scroll
 * @source figma
 */
const Iconscroll = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 5.99998C11.4477 5.99998 11 6.4477 11 6.99998V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V6.99998C13 6.4477 12.5523 5.99998 12 5.99998Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99997 2.24999C7.37663 2.24999 5.24999 4.37664 5.24999 6.99998V17C5.24999 19.6233 7.37663 21.7499 9.99997 21.7499H14C16.6233 21.7499 18.75 19.6233 18.75 17V6.99998C18.75 4.37664 16.6233 2.24999 14 2.24999H9.99997ZM6.74998 6.99998C6.74998 5.20506 8.20505 3.74999 9.99997 3.74999H14C15.7949 3.74999 17.25 5.20506 17.25 6.99998V17C17.25 18.7949 15.7949 20.2499 14 20.2499H9.99997C8.20505 20.2499 6.74998 18.7949 6.74998 17V6.99998Z"
        fill="black"
      />
    </svg>
  );
});

Iconscroll.displayName = 'Iconscroll';

export default Iconscroll;
