import React from 'react'

export interface IconcustomerserviceProps extends React.SVGProps<SVGSVGElement> {}

/**
 * customer_service
 * @source figma
 */
export const Iconcustomerservice = React.memo((props: IconcustomerserviceProps) => {
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
        d="M19.4495 11C19.0069 6.65923 15.7174 3.5 12 3.5C8.28258 3.5 4.99306 6.65923 4.55051 11H6.5H8V12.5V15.5V17H6.5H5C3.89543 17 3 16.1046 3 15V12C3 6.47715 7.02944 2 12 2C16.9706 2 21 6.47715 21 12V14.75V15C21 15.0955 20.9933 15.1895 20.9803 15.2815C20.7558 18.3088 18.6282 20.8897 15.652 21.6613L14.4382 21.976L14.0618 20.524L15.2756 20.2093C16.995 19.7635 18.3558 18.5533 19.0323 16.9997L19 17H17.5H16V15.5V12.5V11H17.5H19.4495ZM6.5 12.5H4.5V15C4.5 15.2761 4.72386 15.5 5 15.5H6.5V12.5ZM19.4889 15.1053C19.4963 14.9877 19.5 14.8692 19.5 14.75V12.5H17.5V15.5H19C19.24 15.5 19.4405 15.3309 19.4889 15.1053Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcustomerservice.displayName = 'Iconcustomerservice'

export default Iconcustomerservice
