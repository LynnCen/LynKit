import React from 'react'

export interface IcontextcolorProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_color
 * @source figma
 */
export const Icontextcolor = React.memo((props: IcontextcolorProps) => {
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
        d="M20.696 21H17.9699L16.1221 16.75H7.87859L6.03076 21H3.30469L11.1308 3H12.8699L20.696 21ZM8.96554 14.25L12.0003 7.26997L15.0351 14.25H8.96554Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontextcolor.displayName = 'Icontextcolor'

export default Icontextcolor
