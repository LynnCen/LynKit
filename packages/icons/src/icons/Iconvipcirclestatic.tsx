import React from 'react'

export interface IconvipcirclestaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * vip_circle_static
 * @source figma
 */
export const Iconvipcirclestatic = React.memo((props: IconvipcirclestaticProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_10723_3476)">
        <rect width="24" height="24" rx="12" fill="#FBCA4E" />
        <g filter="url(#filter0_d_10723_3476)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.125 6.375C13.125 6.99632 12.6213 7.5 12 7.5C11.3787 7.5 10.875 6.99632 10.875 6.375C10.875 5.75368 11.3787 5.25 12 5.25C12.6213 5.25 13.125 5.75368 13.125 6.375ZM6.375 9C6.375 9.62132 5.87132 10.125 5.25 10.125C4.62868 10.125 4.125 9.62132 4.125 9C4.125 8.37868 4.62868 7.875 5.25 7.875C5.87132 7.875 6.375 8.37868 6.375 9ZM19.875 9C19.875 9.62132 19.3713 10.125 18.75 10.125C18.1287 10.125 17.625 9.62132 17.625 9C17.625 8.37868 18.1287 7.875 18.75 7.875C19.3713 7.875 19.875 8.37868 19.875 9ZM7.361 17.4237L5.82032 10.9529C5.7448 10.6357 6.08212 10.3799 6.36718 10.5382L8.99968 12L11.6996 8.45C11.8496 8.25274 12.1463 8.25266 12.2964 8.44982L14.9997 12L17.629 10.5386C17.9141 10.3802 18.2516 10.636 18.176 10.9533L16.6354 17.4237C16.555 17.7616 16.2531 18 15.9058 18H8.09061C7.74331 18 7.44145 17.7616 7.361 17.4237Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_10723_3476"
          x="-3"
          y="-3"
          width="30"
          height="30"
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
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.97222 0 0 0 0 0.696851 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10723_3476" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_10723_3476"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_10723_3476">
          <rect width="24" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
})

Iconvipcirclestatic.displayName = 'Iconvipcirclestatic'

export default Iconvipcirclestatic
