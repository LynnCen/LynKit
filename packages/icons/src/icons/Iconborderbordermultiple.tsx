import React from 'react'

export interface IconborderbordermultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * border_border_multiple
 * @source figma
 */
export const Iconborderbordermultiple = React.memo((props: IconborderbordermultipleProps) => {
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
        d="M12.75 11.25H21V12.75H12.75V21H11.25V12.75H3V11.25H11.25V3H12.75V11.25Z"
        fill="#B4B8BF"
      />
      <path
        d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5L4.7959 20.9893C3.78722 20.887 3 20.0357 3 19V5C3 3.89543 3.89543 3 5 3H19ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5H5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconborderbordermultiple.displayName = 'Iconborderbordermultiple'

export default Iconborderbordermultiple
