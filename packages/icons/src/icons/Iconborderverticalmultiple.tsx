import React from 'react'

export interface IconborderverticalmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * border_vertical_multiple
 * @source figma
 */
export const Iconborderverticalmultiple = React.memo((props: IconborderverticalmultipleProps) => {
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
        d="M3 11.25L21 11.25L21 12.75L3 12.75L3 11.25Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 3C20.1046 3 21 3.89543 21 5L21 19C21 20.1046 20.1046 21 19 21L5 21C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3ZM19.5 19C19.5 19.2761 19.2761 19.5 19 19.5L12.75 19.5L12.75 12.75L11.25 12.75L11.25 19.5L5 19.5C4.72386 19.5 4.5 19.2761 4.5 19L4.5 5C4.5 4.72386 4.72386 4.5 5 4.5L11.25 4.5L11.25 11.25L12.75 11.25L12.75 4.5L19 4.5C19.2761 4.5 19.5 4.72386 19.5 5L19.5 19Z"
        fill="#B4B8BF"
      />
    </svg>
  )
})

Iconborderverticalmultiple.displayName = 'Iconborderverticalmultiple'

export default Iconborderverticalmultiple
