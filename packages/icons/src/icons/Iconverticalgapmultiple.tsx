import React from 'react'

export interface IconverticalgapmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * vertical_gap_multiple
 * @source figma
 */
export const Iconverticalgapmultiple = React.memo((props: IconverticalgapmultipleProps) => {
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
        d="M21.5 4.5H18C17.7239 4.5 17.5 4.72386 17.5 5V19C17.5 19.2761 17.7239 19.5 18 19.5H21.5V21H18C16.8954 21 16 20.1046 16 19V5C16 3.89543 16.8954 3 18 3H21.5V4.5Z"
        fill="#B4B8BF"
      />
      <path
        d="M12 17.5C12.4142 17.5 12.75 17.1642 12.75 16.75L12.75 7.25C12.75 6.83579 12.4142 6.5 12 6.5C11.5858 6.5 11.25 6.83579 11.25 7.25L11.25 16.75C11.25 17.1642 11.5858 17.5 12 17.5Z"
        fill="#4C535C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 4.5H6C6.27614 4.5 6.5 4.72386 6.5 5V19C6.5 19.2761 6.27614 19.5 6 19.5H2.5V21H6C7.10457 21 8 20.1046 8 19V5C8 3.89543 7.10457 3 6 3H2.5V4.5Z"
        fill="#B4B8BF"
      />
    </svg>
  )
})

Iconverticalgapmultiple.displayName = 'Iconverticalgapmultiple'

export default Iconverticalgapmultiple
