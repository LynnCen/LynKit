import React from 'react'

export interface IconbgremovalProps extends React.SVGProps<SVGSVGElement> {}

/**
 * bgremoval
 * @source figma
 */
export const Iconbgremoval = React.memo((props: IconbgremovalProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect
        x="3.75"
        y="3.75"
        width="16.5"
        height="16.5"
        rx="1.25"
        stroke="#222529"
        strokeWidth={1.5}
      />
      <rect x="1" y="11" width="22" height="1.5" fill="#222529" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8496 12H12.7283L3.99736 20.7309C4.29213 20.902 4.63462 21 5 21H5.84959L14.8496 12ZM10.0919 21H7.97058L16.9706 12H19.0919L10.0919 21ZM14.3343 21H12.213L21 12.213V14.3343L14.3343 21ZM18.5768 21H16.4554L21 16.4554V18.5768L18.5768 21ZM3.0721 19.5341L10.6062 12H8.48486L3 17.4849V19C3 19.185 3.02511 19.3641 3.0721 19.5341ZM3 15.3638L6.36375 12H4.24243L3 13.2424V15.3638Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconbgremoval.displayName = 'Iconbgremoval'

export default Iconbgremoval
