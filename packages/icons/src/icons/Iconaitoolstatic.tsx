import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_tool_static
 * @source figma
 */
const Iconaitoolstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <g opacity="0.1">
        <path
          d="M9.59961 7.65002C8.85402 7.65002 8.26693 8.26383 8.08298 8.98636C7.59709 10.895 6.09456 12.3975 4.18595 12.8834C3.46341 13.0673 2.84961 13.6544 2.84961 14.4C2.84961 15.1456 3.46341 15.7327 4.18595 15.9167C6.09456 16.4025 7.59709 17.9051 8.08298 19.8137C8.26693 20.5362 8.85402 21.15 9.59961 21.15C10.3452 21.15 10.9323 20.5362 11.1162 19.8137C11.6021 17.9051 13.1047 16.4025 15.0133 15.9167C15.7358 15.7327 16.3496 15.1456 16.3496 14.4C16.3496 13.6544 15.7358 13.0673 15.0133 12.8834C13.1047 12.3975 11.6021 10.895 11.1162 8.98636C10.9323 8.26383 10.3452 7.65002 9.59961 7.65002Z"
          fill="url(#paint0_linear_5238_2855)"
        />
      </g>
      <g opacity="0.1">
        <path
          d="M18.6 1.80002C18.2024 1.80002 17.8892 2.12738 17.7911 2.51273C17.532 3.53066 16.7306 4.33201 15.7127 4.59115C15.3274 4.68925 15 5.00237 15 5.40002C15 5.79766 15.3274 6.11078 15.7127 6.20889C16.7306 6.46803 17.532 7.26938 17.7911 8.2873C17.8892 8.67266 18.2024 9.00002 18.6 9.00002C18.9976 9.00002 19.3108 8.67266 19.4089 8.2873C19.668 7.26938 20.4694 6.46803 21.4873 6.20889C21.8726 6.11078 22.2 5.79766 22.2 5.40002C22.2 5.00237 21.8726 4.68925 21.4873 4.59115C20.4694 4.33201 19.668 3.53066 19.4089 2.51273C19.3108 2.12738 18.9976 1.80002 18.6 1.80002Z"
          fill="url(#paint1_linear_5238_2855)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_5238_2855"
          x1="2.84961"
          y1="16.5938"
          x2="16.3496"
          y2="16.5938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43BBFF" />
          <stop offset="1" stopColor="#30E2B0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5238_2855"
          x1="15"
          y1="6.57002"
          x2="22.2"
          y2="6.57002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43BBFF" />
          <stop offset="1" stopColor="#30E2B0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

Iconaitoolstatic.displayName = 'Iconaitoolstatic';

export default Iconaitoolstatic;
