import React from 'react'

export interface IconpreviewProps extends React.SVGProps<SVGSVGElement> {}

/**
 * preview
 * @source figma
 */
export const Iconpreview = React.memo((props: IconpreviewProps) => {
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
        d="M20.2248 12.3265C18.2374 9.31583 15.2431 7.5 12 7.5C8.75635 7.5 5.7616 9.3165 3.77419 12.3282C5.81564 15.217 8.7847 16.9466 11.9988 16.9466C15.2131 16.9466 18.1839 15.2159 20.2248 12.3265ZM12 6C16.1577 6 19.825 8.51911 21.9999 12.3548C19.7461 16.0481 16.1059 18.4466 11.9988 18.4466C7.97142 18.4466 4.39289 16.1402 2.13042 12.5681C2.08611 12.4981 2.04231 12.4277 1.99902 12.3568C4.17378 8.51999 7.84167 6 12 6ZM10.5 12.1748C10.5 13.0032 11.1716 13.6748 12 13.6748C12.8284 13.6748 13.5 13.0032 13.5 12.1748C13.5 11.3464 12.8284 10.6748 12 10.6748C11.1716 10.6748 10.5 11.3464 10.5 12.1748ZM15 12.1748C15 13.8317 13.6569 15.1748 12 15.1748C10.3431 15.1748 9 13.8317 9 12.1748C9 10.518 10.3431 9.1748 12 9.1748C13.6569 9.1748 15 10.518 15 12.1748Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconpreview.displayName = 'Iconpreview'

export default Iconpreview
