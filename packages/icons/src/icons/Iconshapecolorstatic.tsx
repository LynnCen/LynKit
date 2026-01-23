import React from 'react'

export interface IconshapecolorstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shape_color_static
 * @source figma
 */
export const Iconshapecolorstatic = React.memo((props: IconshapecolorstaticProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_6398_3312)">
        <g filter="url(#filter0_f_6398_3312)">
          <g clipPath="url(#paint0_angular_6398_3312_clip_path)">
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
            fill="url(#paint1_radial_6398_3312)"
            fillOpacity={0.5}
          />
        </g>
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
        fill="black"
        fillOpacity={0.08}
      />
      <defs>
        <filter
          id="filter0_f_6398_3312"
          x="-6.5"
          y="-6.5"
          width="37"
          height="37"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_6398_3312" />
        </filter>
        <clipPath id="paint0_angular_6398_3312_clip_path">
          <rect x="-0.5" y="-0.5" width="25" height="25" />
        </clipPath>
        <radialGradient
          id="paint1_radial_6398_3312"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 12) rotate(90) scale(12.5)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity={0} />
        </radialGradient>
        <clipPath id="clip0_6398_3312">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
})

Iconshapecolorstatic.displayName = 'Iconshapecolorstatic'

export default Iconshapecolorstatic
