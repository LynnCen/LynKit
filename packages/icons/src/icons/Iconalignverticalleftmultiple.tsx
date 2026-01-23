import React from 'react'

export interface IconalignverticalleftmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * align_vertical_left_multiple
 * @source figma
 */
export const Iconalignverticalleftmultiple = React.memo(
  (props: IconalignverticalleftmultipleProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <path d="M8.75 14V16H15.75V14H8.75ZM8.75 8V10H21.75V8H8.75Z" fill="#222529" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 21L4 3L5.5 3L5.5 21L4 21Z"
          fill="#B4B8BF"
        />
      </svg>
    )
  }
)

Iconalignverticalleftmultiple.displayName = 'Iconalignverticalleftmultiple'

export default Iconalignverticalleftmultiple
