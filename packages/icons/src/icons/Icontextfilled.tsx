import React from 'react'

export interface IcontextfilledProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_filled
 * @source figma
 */
export const Icontextfilled = React.memo((props: IcontextfilledProps) => {
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
        d="M7 5C6.44772 5 6 5.44772 6 6V7H4V6C4 4.34315 5.34315 3 7 3H17C18.6569 3 20 4.34315 20 6V7H18V6C18 5.44772 17.5523 5 17 5H13V19H15V21H9V19H11V5H7Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontextfilled.displayName = 'Icontextfilled'

export default Icontextfilled
