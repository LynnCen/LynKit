import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * e_folder_fill_static
 * @source figma
 */
const Iconefolderfillstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 14V5.5C3 4.39543 3.89543 3.5 5 3.5H9.22302C9.40426 3.5 9.5821 3.54926 9.73751 3.64251L11.7625 4.85749C11.9179 4.95074 12.0957 5 12.277 5H19C20.1046 5 21 5.89543 21 7V14C21 15.1046 20.1046 16 19 16H5C3.89543 16 3 15.1046 3 14Z"
        fill="#F8B707"
      />
      <g filter="url(#filter0_d_3717_2439)">
        <path d="M4.5 6.5H19.5L19 19H5L4.5 6.5Z" fill="white" />
      </g>
      <path
        d="M19.7348 9H4.26592C3.06292 9 2.13215 10.0544 2.28136 11.2481L3.28136 19.2481C3.40647 20.2489 4.25727 21 5.26592 21H18.7348C19.7434 21 20.5942 20.2489 20.7193 19.2481L21.7193 11.2481C21.8686 10.0544 20.9378 9 19.7348 9Z"
        fill="#FFD94B"
      />
      <defs>
        <filter
          id="filter0_d_3717_2439"
          x="2.25"
          y="3.5"
          width="19.5"
          height="17"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-0.75" />
          <feGaussianBlur stdDeviation="1.125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow_3717_2439" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3717_2439"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
});

Iconefolderfillstatic.displayName = 'Iconefolderfillstatic';

export default Iconefolderfillstatic;
