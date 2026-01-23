import React from 'react'

export interface IcontoolfilledProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tool_filled
 * @source figma
 */
export const Icontoolfilled = React.memo((props: IcontoolfilledProps) => {
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
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8 12.75H11.25V16H12.75V12.75H16V11.25H12.75V8H11.25V11.25H8V12.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontoolfilled.displayName = 'Icontoolfilled'

export default Icontoolfilled
