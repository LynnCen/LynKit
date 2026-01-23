import React from 'react'

export interface IcontextautoheightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_auto_height
 * @source figma
 */
export const Icontextautoheight = React.memo((props: IcontextautoheightProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M19.9996 6.50287H3.99958V5.00287H19.9996V6.50287Z" fill="#222529" />
      <path d="M19.9996 12.7501H3.99964V11.2501H19.9996V12.7501Z" fill="#222529" />
      <path
        d="M4.00087 19.017L13.0009 19.0001L12.998 17.5001L3.99805 17.517L4.00087 19.017Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontextautoheight.displayName = 'Icontextautoheight'

export default Icontextautoheight
