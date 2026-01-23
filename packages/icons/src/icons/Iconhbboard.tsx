import React from 'react'

export interface IconhbboardProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_ board
 * @source figma
 */
export const Iconhbboard = React.memo((props: IconhbboardProps) => {
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
        d="M9.5 15C10.3284 15 11 15.6716 11 16.5V19.5C11 20.3284 10.3284 21 9.5 21H4.5C3.67157 21 3 20.3284 3 19.5V16.5C3 15.6716 3.67157 15 4.5 15H9.5Z"
        fill="black"
      />
      <path
        d="M19.5 11C20.3284 11 21 11.6716 21 12.5V19.5C21 20.3284 20.3284 21 19.5 21H14.5C13.6716 21 13 20.3284 13 19.5V12.5C13 11.6716 13.6716 11 14.5 11H19.5Z"
        fill="black"
      />
      <path
        d="M9.5 3C10.3284 3 11 3.67157 11 4.5V11.5C11 12.3284 10.3284 13 9.5 13H4.5C3.67157 13 3 12.3284 3 11.5V4.5C3 3.67157 3.67157 3 4.5 3H9.5Z"
        fill="black"
      />
      <path
        d="M19.5 3C20.3284 3 21 3.67157 21 4.5V7.5C21 8.32843 20.3284 9 19.5 9H14.5C13.6716 9 13 8.32843 13 7.5V4.5C13 3.67157 13.6716 3 14.5 3H19.5Z"
        fill="black"
      />
    </svg>
  )
})

Iconhbboard.displayName = 'Iconhbboard'

export default Iconhbboard
