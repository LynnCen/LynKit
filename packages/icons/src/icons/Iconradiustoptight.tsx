import React from 'react'

export interface IconradiustoptightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * radius_top_tight
 * @source figma
 */
export const Iconradiustoptight = React.memo((props: IconradiustoptightProps) => {
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
        d="M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H9.5C15.4371 3.75 20.25 8.56294 20.25 14.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25C19.0858 20.25 18.75 19.9142 18.75 19.5V14.5C18.75 9.39137 14.6086 5.25 9.5 5.25H4.5C4.08579 5.25 3.75 4.91421 3.75 4.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconradiustoptight.displayName = 'Iconradiustoptight'

export default Iconradiustoptight
