import React from 'react'

export interface IconxiansuibianjiaogemingziProps extends React.SVGProps<SVGSVGElement> {}

/**
 * xiansuibianjiaogemingzi
 * @source figma
 */
export const Iconxiansuibianjiaogemingzi = React.memo((props: IconxiansuibianjiaogemingziProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect x="9" y="11" width="4" height="4" fill="black" fillOpacity={0.6} />
      <rect x="13" y="3" width="8" height="8" fill="black" fillOpacity={0.8} />
    </svg>
  )
})

Iconxiansuibianjiaogemingzi.displayName = 'Iconxiansuibianjiaogemingzi'

export default Iconxiansuibianjiaogemingzi
