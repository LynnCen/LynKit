import React from 'react'

export interface IconlinediamondrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * line_diamond_right
 * @source figma
 */
export const Iconlinediamondright = React.memo((props: IconlinediamondrightProps) => {
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
        d="M12.75 11.25L16.2929 7.70711C16.6834 7.31658 17.3166 7.31658 17.7071 7.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L17.7071 16.2929C17.3166 16.6834 16.6834 16.6834 16.2929 16.2929L12.75 12.75H2.75C2.33579 12.75 2 12.4142 2 12C2 11.5858 2.33579 11.25 2.75 11.25H12.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlinediamondright.displayName = 'Iconlinediamondright'

export default Iconlinediamondright
