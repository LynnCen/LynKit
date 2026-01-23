import React from 'react'

export interface IconcolorcirclestaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * color_circle_static
 * @source figma
 */
export const Iconcolorcirclestatic = React.memo((props: IconcolorcirclestaticProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_12073_3602)">
        <g filter="url(#filter0_f_12073_3602)">
          <g clipPath="url(#paint0_angular_12073_3602_clip_path)">
            <g transform="matrix(0 0.0125 -0.0125 0 12 12)">
              <foreignObject x="-1213.33" y="-1213.33" width="2426.67" height="2426.67">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    background:
                      'conic-gradient(from 90deg,rgba(255, 64, 64, 1) 0deg,rgba(255, 62, 62, 1) 5.82477deg,rgba(187, 100, 255, 0.9057) 51.155deg,rgba(27, 91, 255, 1) 103.039deg,rgba(74, 255, 222, 1) 155.347deg,rgba(152, 255, 72, 1) 210.428deg,rgba(255, 242, 133, 1) 251.651deg,rgba(255, 192, 97, 1) 303.797deg,rgba(255, 67, 67, 1) 352.062deg,rgba(255, 64, 64, 1) 360deg)',
                    height: '100%',
                    width: '100%',
                    opacity: '1',
                  }}
                ></div>
              </foreignObject>
            </g>
          </g>
          <rect x="-0.5" y="-0.5" width="25" height="25" />
          <rect
            x="-0.5"
            y="-0.5"
            width="25"
            height="25"
            fill="url(#paint1_radial_12073_3602)"
            fillOpacity={0.5}
          />
        </g>
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill="black"
        fillOpacity={0.08}
      />
      <defs>
        <filter
          id="filter0_f_12073_3602"
          x="-6.5"
          y="-6.5"
          width="37"
          height="37"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_12073_3602" />
        </filter>
        <clipPath id="paint0_angular_12073_3602_clip_path">
          <rect x="-0.5" y="-0.5" width="25" height="25" />
        </clipPath>
        <radialGradient
          id="paint1_radial_12073_3602"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 12) rotate(90) scale(12.5)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity={0} />
        </radialGradient>
        <clipPath id="clip0_12073_3602">
          <rect x="2" y="2" width="20" height="20" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
})

Iconcolorcirclestatic.displayName = 'Iconcolorcirclestatic'

export default Iconcolorcirclestatic
