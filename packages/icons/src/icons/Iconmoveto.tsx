import React from 'react'

export interface IconmovetoProps extends React.SVGProps<SVGSVGElement> {}

/**
 * move_to
 * @source figma
 */
export const Iconmoveto = React.memo((props: IconmovetoProps) => {
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
        d="M5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V15.0278H3V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V10C3 11.5188 4.23122 12.75 5.75 12.75H12.9283L10.6504 15.0279L11.7111 16.0885L15.3197 12.4799C15.4604 12.3392 15.5394 12.1485 15.5394 11.9495C15.5394 11.7506 15.4604 11.5599 15.3197 11.4192L11.7111 7.81055L10.6504 8.87121L13.0292 11.25H5.75C5.05964 11.25 4.5 10.6904 4.5 10V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmoveto.displayName = 'Iconmoveto'

export default Iconmoveto
