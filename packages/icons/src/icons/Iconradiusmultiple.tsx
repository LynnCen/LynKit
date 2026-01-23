import React from 'react'

export interface IconradiusmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * radius_multiple
 * @source figma
 */
export const Iconradiusmultiple = React.memo((props: IconradiusmultipleProps) => {
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
        d="M20.25 4.5C20.25 4.08579 19.9142 3.75 19.5 3.75H3.75V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25C4.91421 20.25 5.25 19.9142 5.25 19.5V5.25H19.5C19.9142 5.25 20.25 4.91421 20.25 4.5Z"
        fill="#D9DCDF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.25 4.5C20.25 4.08579 19.9142 3.75 19.5 3.75H14.5C8.56294 3.75 3.75 8.56294 3.75 14.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25C4.91421 20.25 5.25 19.9142 5.25 19.5V14.5C5.25 9.39137 9.39137 5.25 14.5 5.25H19.5C19.9142 5.25 20.25 4.91421 20.25 4.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconradiusmultiple.displayName = 'Iconradiusmultiple'

export default Iconradiusmultiple
