import React from 'react'

export interface IconmeasureProps extends React.SVGProps<SVGSVGElement> {}

/**
 * measure
 * @source figma
 */
export const Iconmeasure = React.memo((props: IconmeasureProps) => {
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
        d="M16.75 9.75H14.5V11H13V9.75H7.25V8.25H13V7H14.5V8.25H16.75V9.75ZM11 15.75H16.75V14.25H11V13H9.5V14.25H7.25V15.75H9.5V17H11V15.75Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4.50024H5C4.72386 4.50024 4.5 4.7241 4.5 5.00024V19.0002C4.5 19.2764 4.72386 19.5002 5 19.5002H19C19.2761 19.5002 19.5 19.2764 19.5 19.0002V5.00024C19.5 4.7241 19.2761 4.50024 19 4.50024ZM5 3.00024C3.89543 3.00024 3 3.89567 3 5.00024V19.0002C3 20.1048 3.89543 21.0002 5 21.0002H19C20.1046 21.0002 21 20.1048 21 19.0002V5.00024C21 3.89567 20.1046 3.00024 19 3.00024H5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmeasure.displayName = 'Iconmeasure'

export default Iconmeasure
