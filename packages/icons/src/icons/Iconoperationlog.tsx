import React from 'react'

export interface IconoperationlogProps extends React.SVGProps<SVGSVGElement> {}

/**
 * operation_log
 * @source figma
 */
export const Iconoperationlog = React.memo((props: IconoperationlogProps) => {
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
        d="M9.5 4.5H18C18.2761 4.5 18.5 4.72386 18.5 5V9.44434L19.2272 8.71715C19.4478 8.49654 19.7168 8.35383 20 8.28899V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V12.8941L18.5 14.3941V19C18.5 19.2761 18.2761 19.5 18 19.5H9.5V4.5ZM8 19.5H6C5.72386 19.5 5.5 19.2761 5.5 19V5C5.5 4.72386 5.72386 4.5 6 4.5H8V19.5Z"
        fill="#222529"
      />
      <path
        d="M13.3263 16.0323C13.2422 16.1164 13.1909 16.2276 13.1814 16.3461L13.1086 17.2593C13.1061 17.29 13.1318 17.3156 13.1625 17.3131L14.0739 17.2382C14.1919 17.2285 14.3027 17.1772 14.3865 17.0935L20.9951 10.4849C21.2294 10.2506 21.2294 9.8707 20.9951 9.63638L20.7829 9.42425C20.5486 9.18994 20.1687 9.18994 19.9344 9.42425L13.3263 16.0323Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconoperationlog.displayName = 'Iconoperationlog'

export default Iconoperationlog
