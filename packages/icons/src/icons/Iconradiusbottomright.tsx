import React from 'react'

export interface IconradiusbottomrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * radius_bottom_right
 * @source figma
 */
export const Iconradiusbottomright = React.memo((props: IconradiusbottomrightProps) => {
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
        d="M4 19.25C4 19.6642 4.33579 20 4.75 20H9.75C15.6871 20 20.5 15.1871 20.5 9.25V4.25C20.5 3.83579 20.1642 3.5 19.75 3.5C19.3358 3.5 19 3.83579 19 4.25V9.25C19 14.3586 14.8586 18.5 9.75 18.5H4.75C4.33579 18.5 4 18.8358 4 19.25Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconradiusbottomright.displayName = 'Iconradiusbottomright'

export default Iconradiusbottomright
