import React from 'react'

export interface IconinfostaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * info_static
 * @source figma
 */
export const Iconinfostatic = React.memo((props: IconinfostaticProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="black" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12.7539 10H10V11H11.2539V16H10V17H14V16H12.7539V11V10.0078V10Z"
        fill="white"
      />
    </svg>
  )
})

Iconinfostatic.displayName = 'Iconinfostatic'

export default Iconinfostatic
