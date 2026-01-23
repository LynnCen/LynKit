import React from 'react'

export interface IconalignverticalcentermultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * align_vertical_center_multiple
 * @source figma
 */
export const Iconalignverticalcentermultiple = React.memo(
  (props: IconalignverticalcentermultipleProps) => {
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
          d="M11.25 21L11.25 3L12.75 3L12.75 21L11.25 21Z"
          fill="#B4B8BF"
        />
        <path d="M15.5 16H8.5V14H15.5V16ZM18.5 10H5.5V8H18.5V10Z" fill="#222529" />
      </svg>
    )
  }
)

Iconalignverticalcentermultiple.displayName = 'Iconalignverticalcentermultiple'

export default Iconalignverticalcentermultiple
