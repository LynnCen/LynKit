import React from 'react'

export interface IconquitallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * quit_all
 * @source figma
 */
export const Iconquitall = React.memo((props: IconquitallProps) => {
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
        d="M20 8.66667V5C20 4.44772 19.5523 4 19 4H4C3.44772 4 3 4.44772 3 5V17C3 17.5523 3.44771 18 4 18H15.3333"
        stroke="black"
        strokeWidth={1.5}
      />
      <path d="M6 11L11 11" stroke="black" strokeWidth={1.5} />
      <path d="M8.53553 14.0711L11.6283 10.9783L8.61255 7.96216" stroke="black" strokeWidth={1.5} />
      <rect
        x="15.75"
        y="8.75"
        width="6.5"
        height="11.5"
        rx="0.75"
        stroke="black"
        strokeWidth={1.5}
      />
    </svg>
  )
})

Iconquitall.displayName = 'Iconquitall'

export default Iconquitall
