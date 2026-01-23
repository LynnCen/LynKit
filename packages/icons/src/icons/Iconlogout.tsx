import React from 'react'

export interface IconlogoutProps extends React.SVGProps<SVGSVGElement> {}

/**
 * log_out
 * @source figma
 */
export const Iconlogout = React.memo((props: IconlogoutProps) => {
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
        d="M17.3916 2.875C20.0168 4.62049 21.75 7.60794 21.75 11C21.75 16.3848 17.3848 20.75 12 20.75C6.61522 20.75 2.25 16.3848 2.25 11C2.25 7.60794 3.98317 4.62049 6.6084 2.875L7.43848 4.125C5.21377 5.6043 3.75 8.13126 3.75 11C3.75 15.5563 7.44365 19.25 12 19.25C16.5563 19.25 20.25 15.5563 20.25 11C20.25 8.13126 18.7862 5.6043 16.5615 4.125L17.3916 2.875Z"
        fill="black"
      />
      <path d="M12.75 11H11.25V2H12.75V11Z" fill="black" />
    </svg>
  )
})

Iconlogout.displayName = 'Iconlogout'

export default Iconlogout
