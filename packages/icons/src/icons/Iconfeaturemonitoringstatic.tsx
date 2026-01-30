import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * feature_monitoring_static
 * @source figma
 */
const Iconfeaturemonitoringstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.002 12.5515C10.002 12.2754 10.2258 12.0515 10.502 12.0515H13.502C13.7781 12.0515 14.002 12.2754 14.002 12.5515V19.3669C14.002 19.6431 13.7781 19.8669 13.502 19.8669H10.502C10.2258 19.8669 10.002 19.6431 10.002 19.3669V12.5515Z"
        fill="url(#paint0_linear_10701_4102)"
      />
      <path
        d="M16 9.5376C16 9.26146 16.2239 9.0376 16.5 9.0376H19.5C19.7761 9.0376 20 9.26146 20 9.5376V19.3669C20 19.6431 19.7761 19.8669 19.5 19.8669H16.5C16.2239 19.8669 16 19.6431 16 19.3669V9.5376Z"
        fill="url(#paint1_linear_10701_4102)"
      />
      <path
        d="M17.2202 4.13226L17.2183 4.13038L18.4463 2.90234L13.0737 3.86888L14.5715 5.36669L10.9541 8.98417L9.06599 7.0961L3.79297 12.3691L4.50008 13.0762L9.06599 8.51032L10.9541 10.3984L17.2202 4.13226Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 14.0659C4.22386 14.0659 4 14.2898 4 14.5659V19.3669C4 19.6431 4.22386 19.8669 4.5 19.8669H7.5C7.77614 19.8669 8 19.6431 8 19.3669V14.5659C8 14.2898 7.77614 14.0659 7.5 14.0659H4.5ZM5 18.8669V15.0659H7V18.8669H5Z"
        fill="#222529"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10701_4102"
          x1="13.9739"
          y1="19.8669"
          x2="13.9739"
          y2="12.0516"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#316DF7" />
          <stop offset="1" stopColor="#569AFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_10701_4102"
          x1="19.972"
          y1="19.8669"
          x2="19.972"
          y2="9.03771"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#316DF7" />
          <stop offset="1" stopColor="#569AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

Iconfeaturemonitoringstatic.displayName = 'Iconfeaturemonitoringstatic';

export default Iconfeaturemonitoringstatic;
