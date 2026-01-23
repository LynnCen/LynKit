import React from 'react'

export interface IconarrowleftProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_left
 * @source figma
 */
export const Iconarrowleft = React.memo((props: IconarrowleftProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4698 4.46973L15.5304 5.53039L9.06077 12.0001L15.5304 18.4697L14.4698 19.5304L6.93945 12.0001L14.4698 4.46973Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowleft.displayName = 'Iconarrowleft'

export default Iconarrowleft
