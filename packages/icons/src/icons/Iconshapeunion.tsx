import React from 'react'

export interface IconshapeunionProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shape_union
 * @source figma
 */
export const Iconshapeunion = React.memo((props: IconshapeunionProps) => {
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
        d="M11.5 12.5V19C11.5 19.2761 11.7239 19.5 12 19.5H20C20.2761 19.5 20.5 19.2761 20.5 19V11C20.5 10.7239 20.2761 10.5 20 10.5H12.5V4C12.5 3.72386 12.2761 3.5 12 3.5H4C3.72386 3.5 3.5 3.72386 3.5 4V12C3.5 12.2761 3.72386 12.5 4 12.5H11.5ZM4 14C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V9H20C21.1046 9 22 9.89543 22 11V19C22 20.1046 21.1046 21 20 21H12C10.8954 21 10 20.1046 10 19V14H4Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconshapeunion.displayName = 'Iconshapeunion'

export default Iconshapeunion
