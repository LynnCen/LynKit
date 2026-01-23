import React from 'react'

export interface IconscanningProps extends React.SVGProps<SVGSVGElement> {}

/**
 * scanning
 * @source figma
 */
export const Iconscanning = React.memo((props: IconscanningProps) => {
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
        d="M6 4.75C5.30964 4.75 4.75 5.30964 4.75 6V9.5H3.25V6C3.25 4.48122 4.48122 3.25 6 3.25H9V4.75H6ZM6 19.75C5.30964 19.75 4.75 19.1904 4.75 18.5V15H3.25V18.5C3.25 20.0188 4.48122 21.25 6 21.25H9V19.75H6ZM19.25 6C19.25 5.30964 18.6904 4.75 18 4.75H15V3.25H18C19.5188 3.25 20.75 4.48122 20.75 6V9.5H19.25V6ZM18 19.75C18.6904 19.75 19.25 19.1904 19.25 18.5V15H20.75V18.5C20.75 20.0188 19.5188 21.25 18 21.25H15V19.75H18ZM7 12.75H17V11.25H7V12.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconscanning.displayName = 'Iconscanning'

export default Iconscanning
