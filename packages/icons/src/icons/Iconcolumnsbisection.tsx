import React from 'react'

export interface IconcolumnsbisectionProps extends React.SVGProps<SVGSVGElement> {}

/**
 * columns_bisection
 * @source figma
 */
export const Iconcolumnsbisection = React.memo((props: IconcolumnsbisectionProps) => {
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
        d="M4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4ZM20 4.5H16L16 19.5H20C20.2761 19.5 20.5 19.2761 20.5 19V5C20.5 4.72386 20.2761 4.5 20 4.5ZM9.75 4.5H14.5L14.5 19.5H9.75L9.75 4.5ZM8.25 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V19C3.5 19.2761 3.72386 19.5 4 19.5H8.25L8.25 4.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcolumnsbisection.displayName = 'Iconcolumnsbisection'

export default Iconcolumnsbisection
