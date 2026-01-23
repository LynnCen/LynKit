import React from 'react'

export interface IconthinrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * thin_right
 * @source figma
 */
export const Iconthinright = React.memo((props: IconthinrightProps) => {
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
        d="M17.1893 12.7501H4V11.2501H17.1893L11.9697 6.03039L13.0303 4.96973L20.0607 12.0001L13.0303 19.0304L11.9697 17.9697L17.1893 12.7501Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconthinright.displayName = 'Iconthinright'

export default Iconthinright
