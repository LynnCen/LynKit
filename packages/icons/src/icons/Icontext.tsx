import React from 'react'

export interface IcontextProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text
 * @source figma
 */
export const Icontext = React.memo((props: IcontextProps) => {
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
        d="M4 4V7.11H5.5V4.5H11.3501V19.5H8.49998V21H15.5V19.5H12.8501V4.5H18.5V7.11H20L20 4C20 3.44772 19.5523 3 19 3H5C4.44772 3 4 3.44772 4 4Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontext.displayName = 'Icontext'

export default Icontext
