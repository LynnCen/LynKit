import React from 'react'

export interface IconalignhorizontalmiddlemultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * align_horizontal_middle_multiple
 * @source figma
 */
export const Iconalignhorizontalmiddlemultiple = React.memo(
  (props: IconalignhorizontalmiddlemultipleProps) => {
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
          d="M21 11.25L3 11.25L3 12.75L21 12.75L21 11.25Z"
          fill="#B4B8BF"
        />
        <path d="M10 5.5V18.5H8V5.5H10ZM16 8.5V15.5H14V8.5H16Z" fill="#222529" />
      </svg>
    )
  }
)

Iconalignhorizontalmiddlemultiple.displayName = 'Iconalignhorizontalmiddlemultiple'

export default Iconalignhorizontalmiddlemultiple
