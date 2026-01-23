import React from 'react'

export interface IconlockfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * lock_fill
 * @source figma
 */
export const Iconlockfill = React.memo((props: IconlockfillProps) => {
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
        d="M15.9999 7.50012V9.00012H7.99988V7.50012C7.99988 5.29098 9.79074 3.50012 11.9999 3.50012C14.209 3.50012 15.9999 5.29098 15.9999 7.50012ZM6.49988 9.00012V7.50012C6.49988 4.46256 8.96231 2.00012 11.9999 2.00012C15.0374 2.00012 17.4999 4.46256 17.4999 7.50012V9.00012H17.9999C19.1044 9.00012 19.9999 9.89555 19.9999 11.0001V19.0001C19.9999 20.1047 19.1044 21.0001 17.9999 21.0001H5.99988C4.89531 21.0001 3.99988 20.1047 3.99988 19.0001V11.0001C3.99988 9.89555 4.89531 9.00012 5.99988 9.00012H6.49988Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlockfill.displayName = 'Iconlockfill'

export default Iconlockfill
