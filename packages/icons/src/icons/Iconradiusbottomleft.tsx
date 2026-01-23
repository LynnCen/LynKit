import React from 'react'

export interface IconradiusbottomleftProps extends React.SVGProps<SVGSVGElement> {}

/**
 * radius_bottom_left
 * @source figma
 */
export const Iconradiusbottomleft = React.memo((props: IconradiusbottomleftProps) => {
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
        d="M20.25 19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H14.5C8.56294 20.25 3.75 15.4371 3.75 9.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75C4.91421 3.75 5.25 4.08579 5.25 4.5V9.5C5.25 14.6086 9.39137 18.75 14.5 18.75H19.5C19.9142 18.75 20.25 19.0858 20.25 19.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconradiusbottomleft.displayName = 'Iconradiusbottomleft'

export default Iconradiusbottomleft
