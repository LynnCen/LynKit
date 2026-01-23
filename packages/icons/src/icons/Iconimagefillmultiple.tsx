import React from 'react'

export interface IconimagefillmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * image_fill_multiple
 * @source figma
 */
export const Iconimagefillmultiple = React.memo((props: IconimagefillmultipleProps) => {
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
        d="M19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5L5 4.5C4.72386 4.5 4.5 4.72386 4.5 5L4.5 19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19ZM21 5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5Z"
        fill="#222529"
      />
      <path
        opacity="0.6"
        d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8Z"
        fill="#B4B8BF"
      />
      <path
        opacity="0.6"
        d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8Z"
        fill="#B4B8BF"
      />
    </svg>
  )
})

Iconimagefillmultiple.displayName = 'Iconimagefillmultiple'

export default Iconimagefillmultiple
