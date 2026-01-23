import React from 'react'

export interface IconuserfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * user_fill
 * @source figma
 */
export const Iconuserfill = React.memo((props: IconuserfillProps) => {
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
        d="M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 21V18.6667C3 18.6667 3 14 12 14C21 14 21 18.6667 21 18.6667V21H3Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconuserfill.displayName = 'Iconuserfill'

export default Iconuserfill
