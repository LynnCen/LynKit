import React from 'react'

export interface IconclearfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * clear_fill
 * @source figma
 */
export const Iconclearfill = React.memo((props: IconclearfillProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.4741 16L12 13.5259L9.52595 16L8 14.4741L10.4741 12L8 9.52595L9.52595 8L12 10.4741L14.4741 8L16 9.52595L13.5259 12L16 14.4741L14.4741 16Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconclearfill.displayName = 'Iconclearfill'

export default Iconclearfill
