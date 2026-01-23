import React from 'react'

export interface IconpositionoriginalProps extends React.SVGProps<SVGSVGElement> {}

/**
 * position_original
 * @source figma
 */
export const Iconpositionoriginal = React.memo((props: IconpositionoriginalProps) => {
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
        d="M16.5 3V7C16.5 7.27614 16.7239 7.5 17 7.5L21 7.5L21 9L17 9C15.8954 9 15 8.10457 15 7V3H16.5Z"
        fill="#222529"
      />
      <path
        d="M7.5 21V17C7.5 16.7239 7.27614 16.5 7 16.5H3V15H7C8.10457 15 9 15.8954 9 17V21H7.5Z"
        fill="#222529"
      />
      <path
        d="M17 16.5H21V15H17C15.8954 15 15 15.8954 15 17V21H16.5V17C16.5 16.7239 16.7239 16.5 17 16.5Z"
        fill="#222529"
      />
      <path
        d="M3 7.5L7 7.5C7.27614 7.5 7.5 7.27614 7.5 7L7.5 3H9L9 7C9 8.10457 8.10457 9 7 9L3 9V7.5Z"
        fill="#222529"
      />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconpositionoriginal.displayName = 'Iconpositionoriginal'

export default Iconpositionoriginal
