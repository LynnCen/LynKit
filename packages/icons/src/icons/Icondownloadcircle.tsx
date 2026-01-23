import React from 'react'

export interface IcondownloadcircleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * download_circle
 * @source figma
 */
export const Icondownloadcircle = React.memo((props: IcondownloadcircleProps) => {
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
        d="M12.75 14.3472L15.5061 11.9356L16.4939 13.0644L12 16.9966L7.50612 13.0644L8.49388 11.9356L11.25 14.3472V7H12.75V14.3472Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Icondownloadcircle.displayName = 'Icondownloadcircle'

export default Icondownloadcircle
