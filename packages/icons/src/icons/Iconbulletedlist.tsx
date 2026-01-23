import React from 'react'

export interface IconbulletedlistProps extends React.SVGProps<SVGSVGElement> {}

/**
 * bulleted_list
 * @source figma
 */
export const Iconbulletedlist = React.memo((props: IconbulletedlistProps) => {
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
        d="M6.4 5.7C6.4 6.63888 5.63888 7.4 4.7 7.4C3.76112 7.4 3 6.63888 3 5.7C3 4.76112 3.76112 4 4.7 4C5.63888 4 6.4 4.76112 6.4 5.7Z"
        fill="#222529"
      />
      <path
        d="M6.4 12C6.4 12.9389 5.63888 13.7 4.7 13.7C3.76112 13.7 3 12.9389 3 12C3 11.0611 3.76112 10.3 4.7 10.3C5.63888 10.3 6.4 11.0611 6.4 12Z"
        fill="#222529"
      />
      <path
        d="M6.4 18.2C6.4 19.1389 5.63888 19.9 4.7 19.9C3.76112 19.9 3 19.1389 3 18.2C3 17.2611 3.76112 16.5 4.7 16.5C5.63888 16.5 6.4 17.2611 6.4 18.2Z"
        fill="#222529"
      />
      <path d="M10 6.5H21V5H10V6.5Z" fill="#222529" />
      <path d="M21 18.9831L10 19L9.99718 17.5L20.9972 17.4831L21 18.9831Z" fill="#222529" />
      <path d="M9.99991 12.7159H21V11.2159H9.99991V12.7159Z" fill="#222529" />
    </svg>
  )
})

Iconbulletedlist.displayName = 'Iconbulletedlist'

export default Iconbulletedlist
