import React from 'react'

export interface IconlinedirectionrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * line_direction_right
 * @source figma
 */
export const Iconlinedirectionright = React.memo((props: IconlinedirectionrightProps) => {
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
        d="M19.1893 12.75L16 15.9393C15.7071 16.2322 15.7071 16.7071 16 17C16.2929 17.2929 16.7678 17.2929 17.0607 17L21.7473 12.3133C21.9204 12.1403 21.9204 11.8597 21.7473 11.6867L17.0607 7C16.7678 6.70711 16.2929 6.70711 16 7C15.7071 7.2929 15.7071 7.76777 16 8.06066L19.1893 11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H19.1893Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlinedirectionright.displayName = 'Iconlinedirectionright'

export default Iconlinedirectionright
