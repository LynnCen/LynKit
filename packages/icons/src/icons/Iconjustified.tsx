import React from 'react'

export interface IconjustifiedProps extends React.SVGProps<SVGSVGElement> {}

/**
 * justified
 * @source figma
 */
export const Iconjustified = React.memo((props: IconjustifiedProps) => {
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
        d="M19.5 11.25L19.5 5C19.5 4.72386 19.2761 4.5 19 4.5L15 4.5L15 11.25L19.5 11.25ZM19.5 12.75L19.5 19C19.5 19.2761 19.2761 19.5 19 19.5L10.5 19.5L10.5 12.75L14.25 12.75L19.5 12.75ZM9 19.5L5 19.5C4.72386 19.5 4.5 19.2761 4.5 19L4.5 12.75L9 12.75L9 19.5ZM4.5 11.25L4.5 5C4.5 4.72386 4.72386 4.5 5 4.5L13.5 4.5L13.5 11.25L4.5 11.25ZM19 21C20.1046 21 21 20.1046 21 19L21 5C21 3.89543 20.1046 3 19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21L19 21Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconjustified.displayName = 'Iconjustified'

export default Iconjustified
