import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * horizontal_bottom_multiple
 * @source figma
 */
const Iconhorizontalbottommultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.6377 14.75L8.3877 20H15.6123L13.3623 14.75H14.9951L17.1406 19.7578C17.494 20.5825 16.8893 21.4997 15.9922 21.5H8.00879C7.11147 21.5 6.50606 20.5826 6.85938 19.7578L9.00586 14.75H10.6377ZM5.75 12.75H4.25V11.25H5.75V12.75ZM9.25 12.75H7.75V11.25H9.25V12.75ZM12.75 12.75H11.25V11.25H12.75V12.75ZM16.25 12.75H14.75V11.25H16.25V12.75ZM19.75 12.75H18.25V11.25H19.75V12.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6375 8.75L9.00554 8.75L6.85943 3.7424C6.50593 2.91756 7.11096 2 8.00836 2L15.9918 2C16.8892 2 17.4942 2.91756 17.1407 3.7424L14.9946 8.75L13.3627 8.75L15.6127 3.5L8.38749 3.5L10.6375 8.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconhorizontalbottommultiple.displayName = 'Iconhorizontalbottommultiple';

export default Iconhorizontalbottommultiple;
