import React from 'react'

export interface IconpagenavrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * pagenav_right
 * @source figma
 */
export const Iconpagenavright = React.memo((props: IconpagenavrightProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M16.5 7.5H18.5V16.5H16.5V7.5Z" fill="#222529" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6ZM20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V6C20.5 5.72386 20.2761 5.5 20 5.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconpagenavright.displayName = 'Iconpagenavright'

export default Iconpagenavright
