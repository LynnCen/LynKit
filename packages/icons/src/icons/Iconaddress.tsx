import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * address
 * @source figma
 */
const Iconaddress = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3.25C4.0335 3.25 3.25 4.0335 3.25 5V19C3.25 19.9665 4.0335 20.75 5 20.75H19C19.9665 20.75 20.75 19.9665 20.75 19V8C20.75 7.0335 19.9665 6.25 19 6.25H13C12.9151 6.25 12.8317 6.25604 12.75 6.26772V5C12.75 4.0335 11.9665 3.25 11 3.25H5ZM12.75 8V19.25H19C19.1381 19.25 19.25 19.1381 19.25 19V8C19.25 7.86193 19.1381 7.75 19 7.75H13C12.8619 7.75 12.75 7.86193 12.75 8ZM11.25 5C11.25 4.86193 11.1381 4.75 11 4.75H5C4.86193 4.75 4.75 4.86193 4.75 5V19C4.75 19.1381 4.86193 19.25 5 19.25H11.25V5ZM10 8.75H6V7.25H10V8.75ZM14 11.75H18V10.25H14V11.75ZM10 11.75H6V10.25H10V11.75ZM14 14.75H18V13.25H14V14.75Z"
        fill="black"
      />
    </svg>
  );
});

Iconaddress.displayName = 'Iconaddress';

export default Iconaddress;
