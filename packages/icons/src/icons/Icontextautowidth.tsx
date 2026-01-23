import React from 'react'

export interface IcontextautowidthProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_auto_width
 * @source figma
 */
export const Icontextautowidth = React.memo((props: IcontextautowidthProps) => {
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
        d="M5 4H6.5V20H5V4ZM17.5 4H19V13H17.5V4ZM12.75 4H11.25V20H12.75V4Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontextautowidth.displayName = 'Icontextautowidth'

export default Icontextautowidth
