import React from 'react'

export interface IconemojiProps extends React.SVGProps<SVGSVGElement> {}

/**
 * emoji
 * @source figma
 */
export const Iconemoji = React.memo((props: IconemojiProps) => {
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
        d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10ZM14.0161 13H15.6152C15.1776 14.5856 13.7248 15.75 12 15.75C10.2752 15.75 8.82243 14.5856 8.38481 13H9.98388C10.3521 13.7409 11.1166 14.25 12 14.25C12.8834 14.25 13.6479 13.7409 14.0161 13ZM14 11C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconemoji.displayName = 'Iconemoji'

export default Iconemoji
