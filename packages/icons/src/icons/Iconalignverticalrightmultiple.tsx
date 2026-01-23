import React from 'react'

export interface IconalignverticalrightmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * align_vertical_right_multiple
 * @source figma
 */
export const Iconalignverticalrightmultiple = React.memo(
  (props: IconalignverticalrightmultipleProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <path d="M17 14V16H10V14H17ZM17 8V10H4V8H17Z" fill="#222529" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.75 21L21.75 3L20.25 3L20.25 21L21.75 21Z"
          fill="#B4B8BF"
        />
      </svg>
    )
  }
)

Iconalignverticalrightmultiple.displayName = 'Iconalignverticalrightmultiple'

export default Iconalignverticalrightmultiple
