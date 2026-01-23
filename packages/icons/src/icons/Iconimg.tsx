import React from 'react'

export interface IconimgProps extends React.SVGProps<SVGSVGElement> {}

/**
 * img
 * @source figma
 */
export const Iconimg = React.memo((props: IconimgProps) => {
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
        d="M4.75 9.5C4.75 8.25736 5.75736 7.25 7 7.25C8.24264 7.25 9.25 8.25736 9.25 9.5C9.25 10.7426 8.24264 11.75 7 11.75C5.75736 11.75 4.75 10.7426 4.75 9.5ZM7 8.75C6.58579 8.75 6.25 9.08579 6.25 9.5C6.25 9.91421 6.58579 10.25 7 10.25C7.41421 10.25 7.75 9.91421 7.75 9.5C7.75 9.08579 7.41421 8.75 7 8.75Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V12.5885L17.0792 10.8781L9.45 16.6C9.32018 16.6974 9.16228 16.75 9 16.75H5.5C5.08579 16.75 4.75 16.4142 4.75 16C4.75 15.5858 5.08579 15.25 5.5 15.25H8.75L16.55 9.4C16.7773 9.22955 17.0813 9.20214 17.3354 9.32918L20.5 10.9115V6C20.5 5.72386 20.2761 5.5 20 5.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconimg.displayName = 'Iconimg'

export default Iconimg
