import React from 'react'

export interface IconalignhorizontalbottommultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * align_horizontal_bottom_multiple
 * @source figma
 */
export const Iconalignhorizontalbottommultiple = React.memo(
  (props: IconalignhorizontalbottommultipleProps) => {
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
          d="M10.5 16.5L10.5 3.5L8.5 3.5L8.5 16.5L10.5 16.5ZM16.5 16.5L16.5 9.5L14.5 9.5L14.5 16.5L16.5 16.5Z"
          fill="#222529"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.5 21.25L3.5 21.25L3.5 19.75L21.5 19.75L21.5 21.25Z"
          fill="#B4B8BF"
        />
      </svg>
    )
  }
)

Iconalignhorizontalbottommultiple.displayName = 'Iconalignhorizontalbottommultiple'

export default Iconalignhorizontalbottommultiple
