import React from 'react'

export interface IconthinupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * thin_up
 * @source figma
 */
export const Iconthinup = React.memo((props: IconthinupProps) => {
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
        d="M12.0001 3.93933L4.96973 10.9697L6.03039 12.0303L11.2501 6.81065V20H12.7501V6.81065L17.9697 12.0303L19.0304 10.9697L12.0001 3.93933Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconthinup.displayName = 'Iconthinup'

export default Iconthinup
