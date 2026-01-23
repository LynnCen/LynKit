import React from 'react'

export interface IconinfofillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * info_fill
 * @source figma
 */
export const Iconinfofill = React.memo((props: IconinfofillProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM10 10H13V16H14V17H10V16H11V11H10V10Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconinfofill.displayName = 'Iconinfofill'

export default Iconinfofill
