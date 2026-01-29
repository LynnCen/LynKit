import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * information
 * @source figma
 */
const Iconinformation = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.01855 7.25H11.5186V12.75H5.01855V7.25ZM6.51855 8.75V11.25H10.0186V8.75H6.51855Z"
        fill="black"
      />
      <path d="M17 15H5V17H17V15Z" fill="black" />
      <path d="M12.7686 7.30603H18.7686V9.30603H12.7686V7.30603Z" fill="black" />
      <path d="M16.7686 10.7144H12.7686V12.7144H16.7686V10.7144Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 6C2.25 5.0335 3.0335 4.25 4 4.25H20C20.9665 4.25 21.75 5.0335 21.75 6V18C21.75 18.9665 20.9665 19.75 20 19.75H4C3.0335 19.75 2.25 18.9665 2.25 18V6ZM4 5.75C3.86193 5.75 3.75 5.86193 3.75 6V18C3.75 18.1381 3.86193 18.25 4 18.25H20C20.1381 18.25 20.25 18.1381 20.25 18V6C20.25 5.86193 20.1381 5.75 20 5.75H4Z"
        fill="black"
      />
    </svg>
  );
});

Iconinformation.displayName = 'Iconinformation';

export default Iconinformation;
