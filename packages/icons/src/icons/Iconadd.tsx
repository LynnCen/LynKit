import React from 'react'

export interface IconaddProps extends React.SVGProps<SVGSVGElement> {}

/**
 * add
 * @source figma
 */
export const Iconadd = React.memo((props: IconaddProps) => {
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
        d="M11.25 12.75V21H12.75V12.75H21V11.25H12.75V3H11.25V11.25H3V12.75H11.25Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconadd.displayName = 'Iconadd'

export default Iconadd
