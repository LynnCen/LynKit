import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * 1st_static
 * @source figma
 */
const Icon1ststatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <g filter="url(#filter0_d_8448_3280)">
        <path
          d="M7.09337 20.5688L6.51953 13.7887H17.4778L16.8005 20.5819C16.7367 21.2213 16.0952 21.6355 15.4862 21.4304L13.7402 20.8423L11.9866 20.2518L10.1967 20.8423L9.59338 21.0414L8.40315 21.4341C7.78953 21.6366 7.14786 21.2127 7.09337 20.5688Z"
          fill="#FAE3D7"
        />
      </g>
      <path
        d="M10.1333 13.7211L10.2422 20.8281L7.67808 21.6733C7.43341 21.754 7.17741 21.5857 7.15445 21.3291L6.47363 13.7211H10.1333Z"
        fill="#EA7B35"
      />
      <path
        d="M13.668 20.8162L13.844 13.655H17.5689L16.7327 21.3363C16.705 21.5904 16.4494 21.7537 16.2073 21.6721L13.668 20.8162Z"
        fill="#E97A33"
      />
      <g filter="url(#filter1_i_8448_3280)">
        <circle cx="12" cy="10.5361" r="8.53613" fill="#F2CF5E" />
      </g>
      <circle cx="12" cy="10.5361" r="7.63613" stroke="#FDE78E" strokeWidth={1.8} />
      <path
        d="M11.5105 8.73834L9.81055 9.06834V7.84834L11.8905 7.42834H12.9805V14.3683H11.5105V8.73834Z"
        fill="#CC8438"
      />
      <path
        d="M8.37107 6.34495C8.0639 6.47611 7.65867 6.66477 7.38826 6.97576C7.13878 7.26267 7.02384 7.62421 6.94909 7.92394C6.867 8.25314 6.67501 8.25388 6.59127 7.92509C6.51487 7.62513 6.39968 7.26304 6.15602 6.97576C5.89155 6.66395 5.48334 6.47512 5.17371 6.34392C4.95346 6.25059 4.95232 6.04948 5.17146 5.95356C5.48389 5.81681 5.8968 5.62356 6.15602 5.32673C6.40709 5.03924 6.52197 4.67817 6.59623 4.37885C6.67792 4.04954 6.86678 4.04947 6.94838 4.3788C7.02312 4.68047 7.138 5.04375 7.38826 5.32673C7.65952 5.63347 8.06487 5.8232 8.37187 5.95581C8.59146 6.05066 8.59106 6.25102 8.37107 6.34495Z"
        fill="white"
      />
      <path
        d="M9.39645 8.73516C9.23118 8.80573 9.01316 8.90723 8.86767 9.07455C8.73344 9.22892 8.6716 9.42344 8.63138 9.5847C8.58721 9.76183 8.48392 9.76222 8.43886 9.58533C8.39776 9.42394 8.33578 9.22912 8.20468 9.07455C8.06239 8.90679 7.84276 8.80519 7.67617 8.7346C7.55767 8.68439 7.55706 8.57619 7.67496 8.52458C7.84306 8.451 8.06521 8.34703 8.20468 8.18733C8.33977 8.03265 8.40158 7.83838 8.44153 7.67733C8.48548 7.50016 8.58709 7.50012 8.631 7.67731C8.67122 7.83962 8.73302 8.03507 8.86767 8.18733C9.01362 8.35236 9.23171 8.45444 9.39688 8.52579C9.51503 8.57682 9.51481 8.68462 9.39645 8.73516Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_8448_3280"
          x="5.51953"
          y="13.7887"
          width="12.958"
          height="9.69641"
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
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.448779 0 0 0 0 0.240484 0 0 0 0 0.10725 0 0 0 0.24 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8448_3280" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_8448_3280"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_8448_3280"
          x="3.46387"
          y="2"
          width="18.0723"
          height="18.0723"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.866667 0 0 0 0 0.607843 0 0 0 0 0.286275 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8448_3280" />
        </filter>
      </defs>
    </svg>
  );
});

Icon1ststatic.displayName = 'Icon1ststatic';

export default Icon1ststatic;
