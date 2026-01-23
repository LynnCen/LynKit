import React from 'react'

export interface Icontitlet1Props extends React.SVGProps<SVGSVGElement> {}

/**
 * title_t1
 * @source figma
 */
export const Icontitlet1 = React.memo((props: Icontitlet1Props) => {
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
      <path d="M18.5 13.5V21H20V13.5H18.5Z" fill="#222529" />
    </svg>
  )
})

Icontitlet1.displayName = 'Icontitlet1'

export default Icontitlet1
