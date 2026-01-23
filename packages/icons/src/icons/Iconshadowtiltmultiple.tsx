import React from 'react'

export interface IconshadowtiltmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shadow_tilt_multiple
 * @source figma
 */
export const Iconshadowtiltmultiple = React.memo((props: IconshadowtiltmultipleProps) => {
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
        opacity="0.6"
        d="M20.3506 8.49988C21.1014 8.50005 21.5846 9.29708 21.2373 9.96277L16.2803 19.4628C16.1079 19.7929 15.766 19.9999 15.3936 19.9999H15C15.5523 19.9999 16 19.5522 16 18.9999V8.49988H20.3506Z"
        fill="#B4B8BF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 5.5V18.5H14.5V5.5H5.5ZM4 5C4 4.44772 4.44772 4 5 4H15C15.5523 4 16 4.44772 16 5V19C16 19.5523 15.5523 20 15 20H5C4.44772 20 4 19.5523 4 19V5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconshadowtiltmultiple.displayName = 'Iconshadowtiltmultiple'

export default Iconshadowtiltmultiple
