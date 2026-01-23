import React from 'react'

export interface IconimgradioProps extends React.SVGProps<SVGSVGElement> {}

/**
 * img_radio
 * @source figma
 */
export const Iconimgradio = React.memo((props: IconimgradioProps) => {
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
        d="M8.5 15.5H12V17H8C7.48232 17 7.05621 16.6067 7.00488 16.1025L7 16V12H8.5V15.5Z"
        fill="black"
      />
      <path
        d="M16.1025 7.00488C16.6067 7.05621 17 7.48232 17 8V12H15.5V8.5H12V7H16L16.1025 7.00488Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.0357 20.2128 20.887 19.2041 20.9893L19 21H5L4.7959 20.9893C3.85435 20.8938 3.1062 20.1457 3.01074 19.2041L3 19V5C3 3.89543 3.89543 3 5 3H19ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5H5Z"
        fill="black"
      />
    </svg>
  )
})

Iconimgradio.displayName = 'Iconimgradio'

export default Iconimgradio
