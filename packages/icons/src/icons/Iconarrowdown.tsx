import React from 'react'

export interface IconarrowdownProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_down
 * @source figma
 */
export const Iconarrowdown = React.memo((props: IconarrowdownProps) => {
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
        d="M12.0001 14.9697L5.53039 8.5L4.46973 9.56066L12.0001 17.091L19.5304 9.56066L18.4697 8.5L12.0001 14.9697Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowdown.displayName = 'Iconarrowdown'

export default Iconarrowdown
