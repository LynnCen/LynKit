import React from 'react'

export interface IconcreategroupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * create_group
 * @source figma
 */
export const Iconcreategroup = React.memo((props: IconcreategroupProps) => {
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
        d="M7 3V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7H3V5C3 3.89543 3.89543 3 5 3H7ZM14 4.5V3H10V4.5H14ZM17 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9H21V5C21 3.89543 20.1046 3 19 3H17V4.5ZM4.5 10H3V14H4.5V10ZM3 17H4.5V19C4.5 19.2761 4.72386 19.5 5 19.5H9V21H5C3.89543 21 3 20.1046 3 19V17ZM18.5 16.5H22V18H18.5V21.5H17V18H13.5V16.5H17V13H18.5V16.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcreategroup.displayName = 'Iconcreategroup'

export default Iconcreategroup
