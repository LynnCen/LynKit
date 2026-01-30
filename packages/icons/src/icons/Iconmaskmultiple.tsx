import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * mask_multiple
 * @source figma
 */
const Iconmaskmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        opacity="0.6"
        d="M5.85938 4.10986C9.90754 4.76062 13 8.26979 13 12.5015C12.9998 16.34 10.4544 19.5821 6.95996 20.6372C3.99382 18.9024 2.00017 15.6856 2 12.0015C2 8.79385 3.5112 5.93976 5.85938 4.10986Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill={color}
      />
    </svg>
  );
});

Iconmaskmultiple.displayName = 'Iconmaskmultiple';

export default Iconmaskmultiple;
