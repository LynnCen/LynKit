import React from 'react'

export interface Icontitlet2Props extends React.SVGProps<SVGSVGElement> {}

/**
 * title_t2
 * @source figma
 */
export const Icontitlet2 = React.memo((props: Icontitlet2Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M4 3V21H5.5V12.75H14V21H15.5V3H14V11.25H5.5V3H4Z" fill="#222529" />
      <path
        d="M19.45 15H17V13.5H20.95V16.6013L18.55 18.6013V19.5H21V21H17.05V17.8987L19.45 15.8987V15Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontitlet2.displayName = 'Icontitlet2'

export default Icontitlet2
