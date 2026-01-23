import React from 'react'

export interface IconuploadProps extends React.SVGProps<SVGSVGElement> {}

/**
 * upload
 * @source figma
 */
export const Iconupload = React.memo((props: IconuploadProps) => {
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
        d="M11.2501 4.87133L11.2501 18.0607H12.7501L12.7501 4.87133L17.4697 9.591L18.5304 8.53034L12.0001 2.00002L5.46974 8.53034L6.5304 9.591L11.2501 4.87133ZM19 22V20.5H5V22H19Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconupload.displayName = 'Iconupload'

export default Iconupload
