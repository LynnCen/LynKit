import React from 'react'

export interface IconailogoProps extends React.SVGProps<SVGSVGElement> {}

/**
 * ai_logo
 * @source figma
 */
export const Iconailogo = React.memo((props: IconailogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M22.0003 5H19.8398V18H22.0003V5Z" fill="#222529" />
      <path
        d="M13.1856 12.7262H8.00041L6.81934 14.282H15.4613L13.1856 12.7262Z"
        fill="url(#paint0_linear_5595_2981)"
      />
      <path
        d="M15.4897 18H17.9671L9.41153 5.0791L1 18H3.36214L9.41153 8.63894L15.4897 18Z"
        fill="#222529"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5595_2981"
          x1="5.80768"
          y1="14.11"
          x2="16.9225"
          y2="12.7687"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="1.565e-07" stopColor="#B7E769" />
          <stop offset="0.0630487" stopColor="#B2E671" />
          <stop offset="0.1607" stopColor="#A4E387" />
          <stop offset="0.2801" stopColor="#8EDDAA" />
          <stop offset="0.3465" stopColor="#80DAC1" />
          <stop offset="0.3892" stopColor="#75CBC7" />
          <stop offset="0.546" stopColor="#5298DA" />
          <stop offset="0.6829" stopColor="#3873E8" />
          <stop offset="0.7932" stopColor="#285CF1" />
          <stop offset="0.863" stopColor="#2254F4" />
        </linearGradient>
      </defs>
    </svg>
  )
})

Iconailogo.displayName = 'Iconailogo'

export default Iconailogo
