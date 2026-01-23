import React from 'react'

export interface IconfileexportProps extends React.SVGProps<SVGSVGElement> {}

/**
 * file_export
 * @source figma
 */
export const Iconfileexport = React.memo((props: IconfileexportProps) => {
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
        d="M6 20.5H13V22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H13H14L20 8V9V11.5H18.5V9H13V3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V20C5.5 20.2761 5.72386 20.5 6 20.5ZM17.4697 15.9092L19.1893 17.6289H15V19.1289H19.1893L17.4697 20.8486L18.5303 21.9092L21.5303 18.9092L22.0607 18.3789L21.5303 17.8486L18.5303 14.8486L17.4697 15.9092Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfileexport.displayName = 'Iconfileexport'

export default Iconfileexport
