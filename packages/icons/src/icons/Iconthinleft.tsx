import React from 'react'

export interface IconthinleftProps extends React.SVGProps<SVGSVGElement> {}

/**
 * thin_left
 * @source figma
 */
export const Iconthinleft = React.memo((props: IconthinleftProps) => {
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
        d="M6.81065 12.7501L12.0303 17.9697L10.9697 19.0304L3.93933 12.0001L10.9697 4.96973L12.0303 6.03039L6.81065 11.2501H20V12.7501H6.81065Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconthinleft.displayName = 'Iconthinleft'

export default Iconthinleft
