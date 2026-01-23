import React from 'react'

export interface IconunlockProps extends React.SVGProps<SVGSVGElement> {}

/**
 * unlock
 * @source figma
 */
export const Iconunlock = React.memo((props: IconunlockProps) => {
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
        d="M8 9V7.5C8 5.29086 9.79086 3.5 12 3.5C13.3085 3.5 14.4702 4.12826 15.2 5.09957L16.7289 4.68989C15.7697 3.07914 14.0109 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5V9H6C4.89543 9 4 9.89543 4 11V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11C20 9.89543 19.1046 9 18 9H8ZM18 10.5C18.2761 10.5 18.5 10.7239 18.5 11V19C18.5 19.2761 18.2761 19.5 18 19.5H6C5.72386 19.5 5.5 19.2761 5.5 19V11C5.5 10.7239 5.72386 10.5 6 10.5H18Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconunlock.displayName = 'Iconunlock'

export default Iconunlock
