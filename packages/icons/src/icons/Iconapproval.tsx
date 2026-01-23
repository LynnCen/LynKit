import React from 'react'

export interface IconapprovalProps extends React.SVGProps<SVGSVGElement> {}

/**
 * approval
 * @source figma
 */
export const Iconapproval = React.memo((props: IconapprovalProps) => {
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
        d="M3.5 20.5C3.5 21.3284 4.17157 22 5 22H19C19.8284 22 20.5 21.3284 20.5 20.5H3.5Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3856 8.47044L13.4728 14.5005L18.5 14.5C18.7761 14.5 19 14.7239 19 15V17.5H5V15C5 14.7239 5.22386 14.5 5.5 14.5L10.5391 14.5005L10.8014 13H10.7961L10.9276 12.2781L11.5938 8.46716C10.4063 8.27312 9.5 7.24239 9.5 6C9.5 4.61929 10.6193 3.5 12 3.5C13.3807 3.5 14.5 4.61929 14.5 6C14.5 7.24957 13.5832 8.28502 12.3856 8.47044ZM14.0761 9.41973C15.2296 8.71794 16 7.44894 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 7.44883 8.77028 8.71775 9.92366 9.41957L9.2714 13H5.5C4.39543 13 3.5 13.8954 3.5 15V19H20.5V15C20.5 13.8954 19.6046 13 18.5 13H14.7258L14.0761 9.41973Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconapproval.displayName = 'Iconapproval'

export default Iconapproval
