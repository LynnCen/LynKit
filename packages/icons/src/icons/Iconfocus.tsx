import React from 'react'

export interface IconfocusProps extends React.SVGProps<SVGSVGElement> {}

/**
 * focus
 * @source figma
 */
export const Iconfocus = React.memo((props: IconfocusProps) => {
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
        d="M11.999 18.5C15.5889 18.5 18.499 15.5899 18.499 12C18.499 8.41015 15.5889 5.5 11.999 5.5C8.40917 5.5 5.49902 8.41015 5.49902 12C5.49902 15.5899 8.40917 18.5 11.999 18.5ZM11.999 20C16.4173 20 19.999 16.4183 19.999 12C19.999 7.58172 16.4173 4 11.999 4C7.58075 4 3.99902 7.58172 3.99902 12C3.99902 16.4183 7.58075 20 11.999 20Z"
        fill="#222529"
      />
      <path
        d="M13.001 12C13.001 12.5523 12.5533 13 12.001 13C11.4487 13 11.001 12.5523 11.001 12C11.001 11.4477 11.4487 11 12.001 11C12.5533 11 13.001 11.4477 13.001 12Z"
        fill="#222529"
      />
      <path d="M11.25 17H12.75V22H11.25V17Z" fill="#222529" />
      <path d="M11.25 2H12.75V7H11.25V2Z" fill="#222529" />
      <path d="M2.00098 11H7.00098V12.5H2.00098V11Z" fill="#222529" />
      <path d="M17.001 11H22.001V12.5H17.001V11Z" fill="#222529" />
    </svg>
  )
})

Iconfocus.displayName = 'Iconfocus'

export default Iconfocus
