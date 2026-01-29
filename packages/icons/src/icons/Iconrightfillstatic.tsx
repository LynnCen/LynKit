import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * right_fill_static
 * @source figma
 */
const Iconrightfillstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M22.9198 12C22.9198 18.0308 18.0308 22.9198 12 22.9198C5.96917 22.9198 1.08021 18.0308 1.08021 12C1.08021 5.96917 5.96917 1.08021 12 1.08021C18.0308 1.08021 22.9198 5.96917 22.9198 12Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.26123 12C0.26123 5.51686 5.51686 0.26123 12 0.26123C18.4831 0.26123 23.7388 5.51686 23.7388 12C23.7388 18.4831 18.4831 23.7388 12 23.7388C5.51686 23.7388 0.26123 18.4831 0.26123 12ZM12 1.8992C6.42148 1.8992 1.8992 6.42148 1.8992 12C1.8992 17.5785 6.42148 22.1008 12 22.1008C17.5785 22.1008 22.1008 17.5785 22.1008 12C22.1008 6.42148 17.5785 1.8992 12 1.8992Z"
        fill="#A6EBC3"
      />
      <g filter="url(#filter0_d_9450_3420)">
        <path
          d="M11.6317 16.52L18.5066 9.11621C18.6297 8.98363 18.6221 8.77635 18.4895 8.65324L17.7693 7.98451C17.6367 7.8614 17.4295 7.86907 17.3063 8.00165L11.0496 14.7397L8.04168 11.302C7.92254 11.1659 7.71558 11.1521 7.57942 11.2712L6.8398 11.9184C6.70364 12.0375 6.68984 12.2445 6.80898 12.3807L10.4152 16.502C10.5679 16.6766 10.7875 16.7782 11.0194 16.7816C11.2514 16.785 11.4739 16.69 11.6317 16.52Z"
          fill="#45D582"
        />
        <path
          d="M17.186 7.8905C17.3706 7.69176 17.6815 7.67984 17.8804 7.86414L18.6011 8.53308C18.7999 8.71774 18.8111 9.02855 18.6265 9.22742L11.7515 16.6317C11.5621 16.8355 11.2952 16.9493 11.0171 16.9452C10.7388 16.9411 10.4748 16.8197 10.2915 16.6102L6.68604 12.4882C6.50737 12.2839 6.52771 11.9735 6.73193 11.7948L7.47119 11.1483C7.67537 10.9697 7.98582 10.9901 8.16455 11.1942L11.0522 14.494L17.186 7.8905Z"
          stroke="#45D582"
          strokeWidth={0.327594}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_9450_3420"
          x="2.30547"
          y="5.11238"
          width="20.7113"
          height="17.7298"
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
          <feOffset dy="1.63797" />
          <feGaussianBlur stdDeviation="2.04746" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9450_3420" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9450_3420"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
});

Iconrightfillstatic.displayName = 'Iconrightfillstatic';

export default Iconrightfillstatic;
