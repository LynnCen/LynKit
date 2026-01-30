import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * massive
 * @source figma
 */
const Iconmassive = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4 5.5C3.72386 5.5 3.5 5.72386 3.5 6V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V6C20.5 5.72386 20.2761 5.5 20 5.5H4ZM2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM6 8H7.5V16H6V8ZM11.5 14V10C11.5 9.72386 11.2761 9.5 11 9.5C10.7239 9.5 10.5 9.72386 10.5 10V14C10.5 14.2761 10.7239 14.5 11 14.5C11.2761 14.5 11.5 14.2761 11.5 14ZM11 8C12.1046 8 13 8.89543 13 10V14C13 15.1046 12.1046 16 11 16C9.89543 16 9 15.1046 9 14V10C9 8.89543 9.89543 8 11 8ZM16.5 10C16.5 9.72386 16.2761 9.5 16 9.5C15.7239 9.5 15.5 9.72386 15.5 10V14C15.5 14.2761 15.7239 14.5 16 14.5C16.2761 14.5 16.5 14.2761 16.5 14V10ZM14 10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10V14C18 15.1046 17.1046 16 16 16C14.8954 16 14 15.1046 14 14V10Z"
        fill={color}
      />
    </svg>
  );
});

Iconmassive.displayName = 'Iconmassive';

export default Iconmassive;
