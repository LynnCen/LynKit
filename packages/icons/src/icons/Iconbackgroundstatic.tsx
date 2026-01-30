import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * background_static
 * @source figma
 */
const Iconbackgroundstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <g clipPath="url(#clip0_12237_3631)">
        <path
          d="M21.5994 9.6C21.5994 13.6846 19.0485 17.1734 15.4527 18.5602H11.9994H8.54611C4.95037 17.1734 2.39941 13.6846 2.39941 9.6C2.39941 4.29804 6.69745 0 11.9994 0C17.3014 0 21.5994 4.29804 21.5994 9.6Z"
          fill="#F2DA00"
        />
        <path
          d="M8.4 6.90015C8.89706 6.90015 9.3 7.30309 9.3 7.80015V9.94392L11.5975 8.79516C11.8509 8.66848 12.1491 8.66848 12.4025 8.79516L14.7 9.94392V7.80015C14.7 7.30309 15.1029 6.90015 15.6 6.90015C16.0971 6.90015 16.5 7.30309 16.5 7.80015V11.4001C16.5 11.7121 16.3385 12.0017 16.0732 12.1657C15.8078 12.3297 15.4765 12.3446 15.1975 12.2051L12 10.6064L8.80249 12.2051C8.5235 12.3446 8.19218 12.3297 7.92684 12.1657C7.66151 12.0017 7.5 11.7121 7.5 11.4001V7.80015C7.5 7.30309 7.90294 6.90015 8.4 6.90015Z"
          fill="#8A6800"
        />
        <path
          d="M8.9543 23.45C8.98016 23.761 9.24014 24.0001 9.5522 24.0001H14.448C14.7601 24.0001 15.0201 23.761 15.046 23.45L15.4534 18.5603H13.6472L13.3439 22.2001H10.6564L10.353 18.5603H8.54678L8.9543 23.45Z"
          fill="#8A6800"
        />
      </g>
      <defs>
        <clipPath id="clip0_12237_3631">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

Iconbackgroundstatic.displayName = 'Iconbackgroundstatic';

export default Iconbackgroundstatic;
