import React from 'react'

export interface IconbatchwatermarkProps extends React.SVGProps<SVGSVGElement> {}

/**
 * Batch_watermark
 * @source figma
 */
export const Iconbatchwatermark = React.memo((props: IconbatchwatermarkProps) => {
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
        d="M19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
        fill="#33383E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303C4.17678 19.2374 4.17678 18.7626 4.46967 18.4697L18.4697 4.46967C18.7626 4.17678 19.2374 4.17678 19.5303 4.46967Z"
        fill="#33383E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.46967 13.4697L13.4697 3.46967L14.5303 4.53033L4.53033 14.5303L3.46967 13.4697Z"
        fill="#33383E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.46967 19.4697L19.4697 9.46967L20.5303 10.5303L10.5303 20.5303L9.46967 19.4697Z"
        fill="#33383E"
      />
    </svg>
  )
})

Iconbatchwatermark.displayName = 'Iconbatchwatermark'

export default Iconbatchwatermark
