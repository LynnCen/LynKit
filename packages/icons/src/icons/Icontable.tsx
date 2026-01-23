import React from 'react'

export interface IcontableProps extends React.SVGProps<SVGSVGElement> {}

/**
 * table
 * @source figma
 */
export const Icontable = React.memo((props: IcontableProps) => {
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
        d="M12.75 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V11.25H12.75V4.5ZM11.25 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V11.25H11.25V4.5ZM4.5 12.75V19C4.5 19.2761 4.72386 19.5 5 19.5H11.25V12.75H4.5ZM12.75 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V12.75H12.75V19.5ZM3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontable.displayName = 'Icontable'

export default Icontable
