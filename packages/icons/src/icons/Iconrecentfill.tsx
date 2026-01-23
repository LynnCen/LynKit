import React from 'react'

export interface IconrecentfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * recent_fill
 * @source figma
 */
export const Iconrecentfill = React.memo((props: IconrecentfillProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.6875 12.4717V7.1875H11.3125V13.1325L15.5809 16.5473L16.4399 15.4736L12.6875 12.4717Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconrecentfill.displayName = 'Iconrecentfill'

export default Iconrecentfill
