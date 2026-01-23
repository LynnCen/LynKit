import React from 'react'

export interface IconarrowretractProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_retract
 * @source figma
 */
export const Iconarrowretract = React.memo((props: IconarrowretractProps) => {
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
        d="M10.3574 12.8926C10.7714 12.8928 11.1073 13.2286 11.1074 13.6426V20H9.60742V15.4531L3.1377 21.9229L2.07715 20.8623L8.54688 14.3926H4V12.8926H10.3574Z"
        fill="#222529"
      />
      <path
        d="M21.9229 3.1377L15.4531 9.60742H20V11.1074H13.6426C13.2285 11.1074 12.8927 10.7715 12.8926 10.3574V4H14.3926V8.54688L20.8623 2.07715L21.9229 3.1377Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowretract.displayName = 'Iconarrowretract'

export default Iconarrowretract
