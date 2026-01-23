import React from 'react'

export interface IconcolorcirclemultiplestaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * color_circle_multiple_static
 * @source figma
 */
export const Iconcolorcirclemultiplestatic = React.memo(
  (props: IconcolorcirclemultiplestaticProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <circle cx="12" cy="12" r="10" fill="#222529" />
        <path d="M12 22V2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          fill="black"
          fillOpacity={0.08}
        />
      </svg>
    )
  }
)

Iconcolorcirclemultiplestatic.displayName = 'Iconcolorcirclemultiplestatic'

export default Iconcolorcirclemultiplestatic
