import React from 'react'

export interface IconphonefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * phone_fill
 * @source figma
 */
export const Iconphonefill = React.memo((props: IconphonefillProps) => {
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
        d="M17.9993 1.25C18.2645 1.25 18.5188 1.35535 18.7064 1.54289C18.8939 1.73042 18.9993 1.98477 18.9993 2.24998V22.25C18.9993 22.5152 18.8939 22.7696 18.7064 22.9571C18.5188 23.1446 18.2645 23.25 17.9993 23.25H5.99928C5.73406 23.25 5.47971 23.1446 5.29217 22.9571C5.10463 22.7696 4.99927 22.5152 4.99927 22.25V2.24998C4.99927 1.98477 5.10463 1.73042 5.29217 1.54289C5.47971 1.35535 5.73406 1.25 5.99928 1.25H17.9993ZM16.5 5H7.5V18H16.5V5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconphonefill.displayName = 'Iconphonefill'

export default Iconphonefill
