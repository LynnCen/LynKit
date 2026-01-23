import React from 'react'

export interface IconsortsettingProps extends React.SVGProps<SVGSVGElement> {}

/**
 * sort_setting
 * @source figma
 */
export const Iconsortsetting = React.memo((props: IconsortsettingProps) => {
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
        d="M9 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V9C4.5 9.27614 4.72386 9.5 5 9.5H9C9.27614 9.5 9.5 9.27614 9.5 9V5C9.5 4.72386 9.27614 4.5 9 4.5ZM9 14.5H5C4.72386 14.5 4.5 14.7239 4.5 15V19C4.5 19.2761 4.72386 19.5 5 19.5H9C9.27614 19.5 9.5 19.2761 9.5 19V15C9.5 14.7239 9.27614 14.5 9 14.5ZM9 3C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5C3 3.89543 3.89543 3 5 3H9ZM9 13C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15C3 13.8954 3.89543 13 5 13H9ZM21 15.75H13.5V14.25H21V15.75ZM13.5 5.75H21V4.25H13.5V5.75ZM19 19.75H13.5V18.25H19V19.75ZM13.5 9.75H19V8.25H13.5V9.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsortsetting.displayName = 'Iconsortsetting'

export default Iconsortsetting
