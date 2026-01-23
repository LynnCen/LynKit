import React from 'react'

export interface IconarrowdownsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_down_small
 * @source figma
 */
export const Iconarrowdownsmall = React.memo((props: IconarrowdownsmallProps) => {
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
        d="M12.0303 13.5696L7.06066 8.59998L6 9.66064L12.0303 15.691L18.0607 9.66064L17 8.59998L12.0303 13.5696Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowdownsmall.displayName = 'Iconarrowdownsmall'

export default Iconarrowdownsmall
