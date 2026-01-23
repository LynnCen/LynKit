import React from 'react'

export interface IconapprovalfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * approval_fill
 * @source figma
 */
export const Iconapprovalfill = React.memo((props: IconapprovalfillProps) => {
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
        d="M13.6214 9.65723C15.0227 9.03514 16 7.63145 16 5.99951C16 3.79037 14.2091 1.99951 12 1.99951C9.79086 1.99951 8 3.79037 8 5.99951C8 7.63286 8.97897 9.03755 10.3822 9.65883L9.68377 13.5H5.50132C4.39705 13.5 3.50174 14.395 3.50132 15.4993L3.5 19H20.4979L20.4992 15.5008C20.4997 14.3959 19.6041 13.5 18.4992 13.5H14.3201L13.6214 9.65723ZM20.5 20.5C20.5 21.3284 19.8284 22 19 22H5C4.17157 22 3.5 21.3284 3.5 20.5H20.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconapprovalfill.displayName = 'Iconapprovalfill'

export default Iconapprovalfill
