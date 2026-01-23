import React from 'react'

export interface IcontextcolorwhitestaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_color_white_static
 * @source figma
 */
export const Icontextcolorwhitestatic = React.memo((props: IcontextcolorwhitestaticProps) => {
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
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.20294 14.75H15.7977L12.0003 6.01597L8.20294 14.75ZM8.96554 14.25L12.0003 7.26997L15.0351 14.25H8.96554Z"
        fill="black"
        fillOpacity={0.24}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9699 21L16.1221 16.75H7.87859L6.03076 21H3.30469L11.1308 3H12.8699L20.696 21H17.9699ZM12.5421 3.5L19.9334 20.5H18.2977L16.4499 16.25H7.55076L5.70294 20.5H4.06729L11.4586 3.5H12.5421Z"
        fill="black"
        fillOpacity={0.24}
      />
    </svg>
  )
})

Icontextcolorwhitestatic.displayName = 'Icontextcolorwhitestatic'

export default Icontextcolorwhitestatic
