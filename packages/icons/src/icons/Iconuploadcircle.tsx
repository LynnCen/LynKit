import React from 'react'

export interface IconuploadcircleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * upload_circle
 * @source figma
 */
export const Iconuploadcircle = React.memo((props: IconuploadcircleProps) => {
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
        d="M12.75 9.65283L15.5061 12.0644L16.4939 10.9356L12 7.00342L7.50612 10.9356L8.49388 12.0644L11.25 9.65283V17H12.75V9.65283Z"
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

Iconuploadcircle.displayName = 'Iconuploadcircle'

export default Iconuploadcircle
