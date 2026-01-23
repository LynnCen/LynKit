import React from 'react'

export interface IcontextfixedProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_fixed
 * @source figma
 */
export const Icontextfixed = React.memo((props: IcontextfixedProps) => {
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
        d="M4.5 19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V17H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V17H4.5V19ZM17 17H15.4463L14.2236 14.084H9.92383L8.56641 17H7L11.4307 7H12.9912L17 17ZM7 12L4.22266 15.4688L3.05176 14.5312L4.47852 12.75H1V11.25H4.47852L3.05176 9.46875L4.22266 8.53125L7 12ZM20.9473 9.46875L19.5215 11.25H23V12.75H19.5215L20.9473 14.5312L19.7764 15.4688L17 12L19.7764 8.53125L20.9473 9.46875ZM10.6025 12.626H13.6133L12.1865 9.22266L10.6025 12.626ZM19 3C20.1046 3 21 3.89543 21 5V7H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7H3V5C3 3.89543 3.89543 3 5 3H19Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontextfixed.displayName = 'Icontextfixed'

export default Icontextfixed
