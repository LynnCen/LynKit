import React from 'react'

export interface IconarrowchevronsdownProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_chevrons_down
 * @source figma
 */
export const Iconarrowchevronsdown = React.memo((props: IconarrowchevronsdownProps) => {
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
        d="M11.9696 17.4999L12.4999 18.0303L13.0303 17.4999L17.5303 12.9999L16.4696 11.9393L12.4999 15.909L8.53027 11.9393L7.46961 12.9999L11.9696 17.4999ZM11.9696 11.4999L12.4999 12.0303L13.0303 11.4999L17.5303 6.99994L16.4696 5.93928L12.4999 9.90895L8.53027 5.93928L7.46961 6.99994L11.9696 11.4999Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowchevronsdown.displayName = 'Iconarrowchevronsdown'

export default Iconarrowchevronsdown
