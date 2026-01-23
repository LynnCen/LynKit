import React from 'react'

export interface IconbordercoloremptystaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * border_color_empty_static
 * @source figma
 */
export const Iconbordercoloremptystatic = React.memo((props: IconbordercoloremptystaticProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M2 4C2 2.89543 2.89543 2 4 2H7V7H2V4Z" fill="#F0F0F0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7H7V12H2V17H7V22H12V17H17V22H20C21.1046 22 22 21.1046 22 20V17H17V12H22V7H17V2H12V7ZM12 8V7H17V12H16V16H12V17H7V12H8V8H12Z"
        fill="#F0F0F0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7H17V17H7V7ZM8 8H16V16H8V8Z"
        fill="black"
        fillOpacity={0.08}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
        fill="black"
        fillOpacity={0.08}
      />
    </svg>
  )
})

Iconbordercoloremptystatic.displayName = 'Iconbordercoloremptystatic'

export default Iconbordercoloremptystatic
