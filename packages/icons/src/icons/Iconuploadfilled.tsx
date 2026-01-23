import React from 'react'

export interface IconuploadfilledProps extends React.SVGProps<SVGSVGElement> {}

/**
 * upload_filled
 * @source figma
 */
export const Iconuploadfilled = React.memo((props: IconuploadfilledProps) => {
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
        d="M4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V7.5C22 6.39543 21.1046 5.5 20 5.5H11.5L9.58579 3.58579C9.21071 3.21071 8.70201 3 8.17157 3H4ZM11.4698 9.46978L7.96973 12.9698L9.03038 14.0304L11.2501 11.8108V17.0001H12.7501V11.8108L14.9697 14.0304L16.0304 12.9698L12.5304 9.46979L12.0001 8.93945L11.4698 9.46978Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconuploadfilled.displayName = 'Iconuploadfilled'

export default Iconuploadfilled
