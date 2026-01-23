import React from 'react'

export interface IconclearupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * clearup
 * @source figma
 */
export const Iconclearup = React.memo((props: IconclearupProps) => {
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
        d="M6.98077 5.5H20.5998C20.876 5.5 21.0998 5.72386 21.0998 6V18C21.0998 18.2761 20.876 18.5 20.5998 18.5H6.98077C6.8132 18.5 6.65677 18.4161 6.56413 18.2764L2.58336 12.2764C2.47221 12.1089 2.47221 11.8911 2.58336 11.7236L6.56413 5.72357C6.65677 5.58394 6.8132 5.5 6.98077 5.5ZM5.31421 4.8943C5.68477 4.33577 6.31049 4 6.98077 4H20.5998C21.7044 4 22.5998 4.89543 22.5998 6V18C22.5998 19.1046 21.7044 20 20.5998 20H6.98077C6.31049 20 5.68477 19.6642 5.31421 19.1057L1.33344 13.1057C0.888854 12.4356 0.888854 11.5644 1.33344 10.8943L5.31421 4.8943ZM15.5849 8.47487L13.11 10.9497L10.6351 8.47487L9.57448 9.53553L12.0494 12.0104L9.57448 14.4853L10.6351 15.5459L13.11 13.0711L15.5849 15.5459L16.6456 14.4853L14.1707 12.0104L16.6456 9.53553L15.5849 8.47487Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconclearup.displayName = 'Iconclearup'

export default Iconclearup
