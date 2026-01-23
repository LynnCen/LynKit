import React from 'react'

export interface IconzoominProps extends React.SVGProps<SVGSVGElement> {}

/**
 * zoom_in
 * @source figma
 */
export const Iconzoomin = React.memo((props: IconzoominProps) => {
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
        d="M11.25 12.75V16.5H12.75V12.75H16.5V11.25H12.75V7.5H11.25V11.25H7.5V12.75H11.25Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconzoomin.displayName = 'Iconzoomin'

export default Iconzoomin
