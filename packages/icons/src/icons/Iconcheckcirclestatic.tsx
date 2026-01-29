import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * check_circle_static
 * @source figma
 */
const Iconcheckcirclestatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <g clipPath="url(#clip0_810_402)">
        <g filter="url(#filter0_d_810_402)">
          <circle cx="12" cy="12" r="8" fill="white" />
        </g>
        <path
          d="M8.91406 11.6562L11.3384 14.0806L15.7831 9.63595"
          stroke="#2254F4"
          strokeWidth={1.5}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_810_402"
          x="0.5"
          y="1.5"
          width="23"
          height="23"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.75" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_810_402" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_810_402"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_810_402">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

Iconcheckcirclestatic.displayName = 'Iconcheckcirclestatic';

export default Iconcheckcirclestatic;
