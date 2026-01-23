import React from 'react'

export interface IconformatverjustifiedProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_ver_justified
 * @source figma
 */
export const Iconformatverjustified = React.memo((props: IconformatverjustifiedProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M6 3L6 21L4.5 21L4.5 3L6 3Z" fill="#222529" />
      <path d="M10.5 3L10.5 21L9 21L9 3L10.5 3Z" fill="#222529" />
      <path d="M19.5 15L19.5 3L18 3L18 15L19.5 15Z" fill="#222529" />
      <path d="M15 3L15 21L13.5 21L13.5 3L15 3Z" fill="#222529" />
    </svg>
  )
})

Iconformatverjustified.displayName = 'Iconformatverjustified'

export default Iconformatverjustified
