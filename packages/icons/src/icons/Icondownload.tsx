import React from 'react'

export interface IcondownloadProps extends React.SVGProps<SVGSVGElement> {}

/**
 * download
 * @source figma
 */
export const Icondownload = React.memo((props: IcondownloadProps) => {
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
        d="M12.75 2V15.1893L17.4697 10.4697L18.5303 11.5303L12 18.0607L5.46967 11.5303L6.53033 10.4697L11.25 15.1893V2H12.75ZM19 20.5V22H5V20.5H19Z"
        fill="#222529"
      />
    </svg>
  )
})

Icondownload.displayName = 'Icondownload'

export default Icondownload
