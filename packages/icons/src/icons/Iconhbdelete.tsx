import React from 'react'

export interface IconhbdeleteProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_delete
 * @source figma
 */
export const Iconhbdelete = React.memo((props: IconhbdeleteProps) => {
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
        d="M13.7051 2.5C14.2099 2.50003 14.6806 2.75407 14.958 3.17578L15.5 4H20.002C20.553 4 21 4.44701 21 4.99805C20.9998 5.54894 20.5529 5.99512 20.002 5.99512H19.3828L18.7217 17.2354L18.7051 17.4316C18.4944 19.3856 16.8887 20.8995 14.9258 20.9951L14.7285 21H9.27148C7.2198 20.9999 5.51266 19.4506 5.29492 17.4316L5.27832 17.2354L4.61719 5.99512H3.99805C3.44711 5.99512 3.00016 5.54894 3 4.99805C3.00001 4.44701 3.44701 4 3.99805 4H8.5L9.04199 3.17578C9.31939 2.75407 9.79013 2.50003 10.2949 2.5H13.7051ZM7.27539 17.1172C7.33757 18.1743 8.21259 18.9999 9.27148 19H14.7285C15.7874 18.9999 16.6624 18.1743 16.7246 17.1172L17.3789 6H6.62109L7.27539 17.1172Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconhbdelete.displayName = 'Iconhbdelete'

export default Iconhbdelete
