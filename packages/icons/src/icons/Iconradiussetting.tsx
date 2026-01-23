import React from 'react'

export interface IconradiussettingProps extends React.SVGProps<SVGSVGElement> {}

/**
 * radius_setting
 * @source figma
 */
export const Iconradiussetting = React.memo((props: IconradiussettingProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M14 4.5H16C17.933 4.5 19.5 6.067 19.5 8V10H21V8C21 5.23858 18.7614 3 16 3H14V4.5Z"
        fill="black"
      />
      <path
        d="M10 4.5V3H8C5.23858 3 3 5.23858 3 8V10H4.5V8C4.5 6.067 6.067 4.5 8 4.5H10Z"
        fill="black"
      />
      <path
        d="M4.5 14H3V16C3 18.7614 5.23858 21 8 21H10V19.5H8C6.067 19.5 4.5 17.933 4.5 16V14Z"
        fill="black"
      />
      <path
        d="M14 19.5V21H16C18.7614 21 21 18.7614 21 16V14H19.5V16C19.5 17.933 17.933 19.5 16 19.5H14Z"
        fill="black"
      />
    </svg>
  )
})

Iconradiussetting.displayName = 'Iconradiussetting'

export default Iconradiussetting
