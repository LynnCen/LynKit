import React from 'react'

export interface IconlineheightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * line_height
 * @source figma
 */
export const Iconlineheight = React.memo((props: IconlineheightProps) => {
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
        d="M20.5 4.5H3.5V3H20.5V4.5ZM6.40552 18L11.4145 6H13.002L17.5807 18H16L14.5265 14.25H9.61498L7.99983 18H6.40552ZM12.1833 8.28688L13.9371 12.75H10.261L12.1833 8.28688ZM3.5 21H20.5V19.5H3.5V21Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlineheight.displayName = 'Iconlineheight'

export default Iconlineheight
