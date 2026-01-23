import React from 'react'

export interface IconzoominksProps extends React.SVGProps<SVGSVGElement> {}

/**
 * zoom in_ks
 * @source figma
 */
export const Iconzoominks = React.memo((props: IconzoominksProps) => {
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
        d="M11.25 6.75V9.75H14.25V11.25H11.25V14.25H9.75V11.25H6.75V9.75H9.75V6.75H11.25Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 18C12.301 18 13.9536 17.3652 15.2465 16.3072L19.4697 20.5303L20.5303 19.4697L16.3072 15.2465C17.3652 13.9536 18 12.301 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18ZM10.5 16.5C13.8137 16.5 16.5 13.8137 16.5 10.5C16.5 7.18629 13.8137 4.5 10.5 4.5C7.18629 4.5 4.5 7.18629 4.5 10.5C4.5 13.8137 7.18629 16.5 10.5 16.5Z"
        fill="black"
      />
    </svg>
  )
})

Iconzoominks.displayName = 'Iconzoominks'

export default Iconzoominks
