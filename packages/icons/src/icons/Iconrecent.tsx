import React from 'react'

export interface IconrecentProps extends React.SVGProps<SVGSVGElement> {}

/**
 * recent
 * @source figma
 */
export const Iconrecent = React.memo((props: IconrecentProps) => {
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
        d="M20.4962 12C20.4962 7.30766 16.6923 3.50376 12 3.50376C7.30766 3.50376 3.50376 7.30766 3.50376 12C3.50376 16.6923 7.30766 20.4962 12 20.4962C16.6923 20.4962 20.4962 16.6923 20.4962 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.6875 12.4717L16.4399 15.4736L15.5809 16.5473L11.3125 13.1325V7.1875H12.6875V12.4717Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconrecent.displayName = 'Iconrecent'

export default Iconrecent
