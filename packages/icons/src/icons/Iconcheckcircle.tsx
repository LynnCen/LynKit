import React from 'react'

export interface IconcheckcircleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * check_circle
 * @source figma
 */
export const Iconcheckcircle = React.memo((props: IconcheckcircleProps) => {
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
        d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.0496 16.5103L17.5496 9.51034L16.4504 8.48966L10.5165 14.88L7.56443 11.5061L6.43557 12.4939L9.93557 16.4939C10.0754 16.6537 10.2765 16.7468 10.4889 16.7499C10.7013 16.7531 10.9051 16.666 11.0496 16.5103Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcheckcircle.displayName = 'Iconcheckcircle'

export default Iconcheckcircle
