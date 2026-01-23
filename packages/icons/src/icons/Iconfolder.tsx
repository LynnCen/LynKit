import React from 'react'

export interface IconfolderProps extends React.SVGProps<SVGSVGElement> {}

/**
 * folder
 * @source figma
 */
export const Iconfolder = React.memo((props: IconfolderProps) => {
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
        d="M10.6467 6.4893L11.0948 7H11.7742H20C20.2761 7 20.5 7.22386 20.5 7.5V18C20.5 18.2761 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V5C3.5 4.72386 3.72386 4.5 4 4.5H8.67476C8.8187 4.5 8.95566 4.56204 9.0506 4.67023L10.6467 6.4893ZM11.7742 5.5L10.1781 3.68093C9.79837 3.24814 9.25053 3 8.67476 3H4C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V7.5C22 6.39543 21.1046 5.5 20 5.5H11.7742Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfolder.displayName = 'Iconfolder'

export default Iconfolder
