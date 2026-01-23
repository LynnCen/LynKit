import React from 'react'

export interface IconfolderfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * folder_fill
 * @source figma
 */
export const Iconfolderfill = React.memo((props: IconfolderfillProps) => {
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
        d="M11.7742 5.5L10.1781 3.68093C9.79837 3.24814 9.25053 3 8.67476 3H4C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V7.5C22 6.39543 21.1046 5.5 20 5.5H11.7742Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfolderfill.displayName = 'Iconfolderfill'

export default Iconfolderfill
