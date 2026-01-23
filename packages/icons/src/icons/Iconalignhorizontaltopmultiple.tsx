import React from 'react'

export interface IconalignhorizontaltopmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * align_horizontal_top_multiple
 * @source figma
 */
export const Iconalignhorizontaltopmultiple = React.memo(
  (props: IconalignhorizontaltopmultipleProps) => {
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
          d="M10.5 7.5L10.5 20.5L8.5 20.5L8.5 7.5L10.5 7.5ZM16.5 7.5L16.5 14.5L14.5 14.5L14.5 7.5L16.5 7.5Z"
          fill="#222529"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.5 2.75L3.5 2.75L3.5 4.25L21.5 4.25L21.5 2.75Z"
          fill="#B4B8BF"
        />
      </svg>
    )
  }
)

Iconalignhorizontaltopmultiple.displayName = 'Iconalignhorizontaltopmultiple'

export default Iconalignhorizontaltopmultiple
