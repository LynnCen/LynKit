import React from 'react'

export interface IconrecordProps extends React.SVGProps<SVGSVGElement> {}

/**
 * record
 * @source figma
 */
export const Iconrecord = React.memo((props: IconrecordProps) => {
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
        d="M6.00073 4.5C5.72459 4.5 5.50073 4.72386 5.50073 5V19C5.50073 19.2761 5.72459 19.5 6.00073 19.5H16.5007V5C16.5007 4.72386 16.2769 4.5 16.0007 4.5H6.00073ZM4.00073 5C4.00073 3.89543 4.89616 3 6.00073 3H16.0007C17.1053 3 18.0007 3.89543 18.0007 5V13.0008H19.5009C20.6055 13.0008 21.5009 13.8962 21.5009 15.0008V19.0008C21.5009 20.1054 20.6055 21.0008 19.5009 21.0008L6.00073 21C4.89616 21 4.00073 20.1046 4.00073 19V5ZM18.0009 14.5008V19.5008H19.5009C19.7771 19.5008 20.0009 19.2769 20.0009 19.0008V15.0008C20.0009 14.7246 19.7771 14.5008 19.5009 14.5008H18.0009ZM14.5009 9.49922H7.50093V7.99922H14.5009V9.49922ZM7.50093 13.2492H11.5009V11.7492H7.50093V13.2492Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconrecord.displayName = 'Iconrecord'

export default Iconrecord
