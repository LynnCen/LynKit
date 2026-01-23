import React from 'react'

export interface IcondeleteallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * delete_all
 * @source figma
 */
export const Icondeleteall = React.memo((props: IcondeleteallProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M16 3.75L8 3.75L8 2.25H16V3.75Z" fill="#222529" />
      <path
        d="M14.3236 16.5318L11.9998 14.2079L9.67594 16.5318L8.62109 15.4769L10.9449 13.1531L8.62109 10.8293L9.67594 9.77441L11.9998 12.0983L14.3236 9.77441L15.3785 10.8293L13.0546 13.1531L15.3785 15.4769L14.3236 16.5318Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29834 6.75H2V5.25L22 5.25001V6.75H19.7017L18.8728 19.1829C18.7765 20.6275 17.5767 21.75 16.1289 21.75H7.87111C6.42333 21.75 5.2235 20.6275 5.1272 19.1829L4.29834 6.75ZM5.80166 6.75L6.62387 19.0832C6.66765 19.7398 7.21303 20.25 7.87111 20.25H16.1289C16.787 20.25 17.3324 19.7398 17.3761 19.0832L18.1983 6.75L5.80166 6.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Icondeleteall.displayName = 'Icondeleteall'

export default Icondeleteall
