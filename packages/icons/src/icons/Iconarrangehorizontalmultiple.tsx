import React from 'react'

export interface IconarrangehorizontalmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrange_horizontal_multiple
 * @source figma
 */
export const Iconarrangehorizontalmultiple = React.memo(
  (props: IconarrangehorizontalmultipleProps) => {
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
          d="M11 17.5L11 6.5L13 6.5L13 17.5L11 17.5Z"
          fill="#222529"
        />
        <path d="M4.75 21H3.25V3H4.75V21ZM20.75 21H19.25V3H20.75V21Z" fill="#B4B8BF" />
      </svg>
    )
  }
)

Iconarrangehorizontalmultiple.displayName = 'Iconarrangehorizontalmultiple'

export default Iconarrangehorizontalmultiple
