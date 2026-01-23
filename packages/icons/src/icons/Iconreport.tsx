import React from 'react'

export interface IconreportProps extends React.SVGProps<SVGSVGElement> {}

/**
 * report
 * @source figma
 */
export const Iconreport = React.memo((props: IconreportProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M11.25 2V5H12.75V2H11.25Z" fill="black" />
      <path
        d="M4.46973 5.03033L6.46973 7.03033L7.53039 5.96967L5.53039 3.96967L4.46973 5.03033Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 7C8.13406 7 5.00006 10.134 5.00006 14V19H19.0001V14C19.0001 10.134 15.866 7 12.0001 7ZM17.5001 17.5V14C17.5001 10.9624 15.0376 8.5 12.0001 8.5C8.96249 8.5 6.50006 10.9624 6.50006 14V17.5H17.5001Z"
        fill="black"
      />
      <path d="M19 22H5V20.5H19V22Z" fill="black" />
      <path
        d="M17.5304 7.03033L19.5304 5.03033L18.4697 3.96967L16.4697 5.96967L17.5304 7.03033Z"
        fill="black"
      />
    </svg>
  )
})

Iconreport.displayName = 'Iconreport'

export default Iconreport
