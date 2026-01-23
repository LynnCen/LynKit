import React from 'react'

export interface IconthindownProps extends React.SVGProps<SVGSVGElement> {}

/**
 * thin_down
 * @source figma
 */
export const Iconthindown = React.memo((props: IconthindownProps) => {
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
        d="M12.7501 17.1893L17.9697 11.9697L19.0304 13.0303L12.0001 20.0607L4.96973 13.0303L6.03039 11.9697L11.2501 17.1893V4H12.7501V17.1893Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconthindown.displayName = 'Iconthindown'

export default Iconthindown
