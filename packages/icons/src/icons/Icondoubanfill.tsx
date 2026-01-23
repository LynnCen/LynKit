import React from 'react'

export interface IcondoubanfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * douban_fill
 * @source figma
 */
export const Icondoubanfill = React.memo((props: IcondoubanfillProps) => {
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
        d="M21 5H3V3H21V5ZM17.5 8.5H6.5V11.5H17.5V8.5ZM19.5 6.5V13.5H4.5V6.5H19.5ZM17.19 19L19.5 15H17.19L14.88 19H9.12L6.81 15H4.5L6.81 19H3V21H21V19H17.19Z"
        fill="#222529"
      />
    </svg>
  )
})

Icondoubanfill.displayName = 'Icondoubanfill'

export default Icondoubanfill
