import React from 'react'

export interface IconnewchatProps extends React.SVGProps<SVGSVGElement> {}

/**
 * new_chat
 * @source figma
 */
export const Iconnewchat = React.memo((props: IconnewchatProps) => {
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
        d="M16.75 10.75H13.25V7.25H11.75V10.75H8.25V12.25H11.75V15.75H13.25V12.25H16.75V10.75Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.96421 19.1802L3.89558 15.532C3.32106 14.308 3 12.9415 3 11.5C3 6.25329 7.25329 2 12.5 2C17.7467 2 22 6.25329 22 11.5C22 16.7467 17.7467 21 12.5 21C10.7937 21 9.19247 20.5502 7.80843 19.7626L3.02689 20.632C2.20557 20.7813 1.57363 19.918 1.96421 19.1802ZM3.77169 18.972L5.57151 15.5722L5.25343 14.8946C4.77058 13.866 4.5 12.7167 4.5 11.5C4.5 7.08172 8.08172 3.5 12.5 3.5C16.9183 3.5 20.5 7.08172 20.5 11.5C20.5 15.9183 16.9183 19.5 12.5 19.5C11.0606 19.5 9.7142 19.1212 8.55028 18.4589L8.07646 18.1893L3.77169 18.972Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconnewchat.displayName = 'Iconnewchat'

export default Iconnewchat
