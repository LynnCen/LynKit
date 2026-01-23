import React from 'react'

export interface IconiframeProps extends React.SVGProps<SVGSVGElement> {}

/**
 * iframe
 * @source figma
 */
export const Iconiframe = React.memo((props: IconiframeProps) => {
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
        d="M7.8252 6.3252H16.1748V3H17.6748V6.3252H21V7.8252H17.6748V16.1748H21V17.6748H17.6748V21H16.1748V17.6748H7.8252V21H6.3252V17.6748H3V16.1748H6.3252V7.8252H3V6.3252H6.3252V3H7.8252V6.3252ZM7.8252 16.1748H16.1748V7.8252H7.8252V16.1748Z"
        fill="black"
      />
    </svg>
  )
})

Iconiframe.displayName = 'Iconiframe'

export default Iconiframe
