import React from 'react'

export interface IconsceneprivateProps extends React.SVGProps<SVGSVGElement> {}

/**
 * scene_private
 * @source figma
 */
export const Iconsceneprivate = React.memo((props: IconsceneprivateProps) => {
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
        d="M14.0314 10.7246L10.8042 8.00732L6.44336 12.3681L7.50402 13.4288L10.8913 10.0415L14.0656 12.7142L18.004 9.16008L16.999 8.04649L14.0314 10.7246Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 5.65515C2.75 4.68865 3.5335 3.90515 4.5 3.90515H19.5C20.4665 3.90515 21.25 4.68865 21.25 5.65515V15.6552C21.25 16.6216 20.4665 17.4052 19.5 17.4052H4.5C3.5335 17.4052 2.75 16.6216 2.75 15.6552V5.65515ZM4.5 5.40515C4.36193 5.40515 4.25 5.51708 4.25 5.65515V15.6552C4.25 15.7932 4.36193 15.9052 4.5 15.9052H19.5C19.6381 15.9052 19.75 15.7932 19.75 15.6552V5.65515C19.75 5.51708 19.6381 5.40515 19.5 5.40515H4.5Z"
        fill="black"
      />
      <path
        d="M6.78906 19.6552C6.78906 19.2409 7.12485 18.9052 7.53906 18.9052H16.4609C16.8752 18.9052 17.2109 19.2409 17.2109 19.6552C17.2109 20.0694 16.8752 20.4052 16.4609 20.4052H7.53906C7.12485 20.4052 6.78906 20.0694 6.78906 19.6552Z"
        fill="black"
      />
    </svg>
  )
})

Iconsceneprivate.displayName = 'Iconsceneprivate'

export default Iconsceneprivate
