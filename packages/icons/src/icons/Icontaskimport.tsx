import React from 'react'

export interface IcontaskimportProps extends React.SVGProps<SVGSVGElement> {}

/**
 * task_import
 * @source figma
 */
export const Icontaskimport = React.memo((props: IcontaskimportProps) => {
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
        d="M4.5 10.2101L6.02784 4.86264C6.08917 4.64799 6.28536 4.5 6.5086 4.5H9V3H6.5086C5.61564 3 4.83087 3.59195 4.58555 4.45056L3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10L19.4144 4.45056C19.1691 3.59196 18.3844 3 17.4914 3H15V4.5H17.4914C17.7146 4.5 17.9108 4.64799 17.9722 4.86264L19.5 10.2101V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V10.2101Z"
        fill="#222529"
      />
      <path
        d="M12.7501 9.36933L15.012 7.43056L15.9881 8.56944L12.0001 11.9878L8.01196 8.56944L8.98815 7.43056L11.2501 9.36933V3H12.7501V9.36933Z"
        fill="#222529"
      />
      <path d="M8 16.75H16V15.25H8V16.75Z" fill="#222529" />
    </svg>
  )
})

Icontaskimport.displayName = 'Icontaskimport'

export default Icontaskimport
