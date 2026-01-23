import React from 'react'

export interface IcontextformatjustifiedProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_format_justified
 * @source figma
 */
export const Icontextformatjustified = React.memo((props: IcontextformatjustifiedProps) => {
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
        d="M11.2499 3.99316C10.5595 3.99316 9.9999 4.55281 9.9999 5.24316V8H11.4999V5.49316H15.2499V18.4999H12.4999V19.9999H15.9999H19.4999V18.4999H16.7499V5.49316H20.4999V8H21.9999V5.24316C21.9999 4.55281 21.4403 3.99316 20.7499 3.99316H15.9999H11.2499ZM4.2498 3.99993V18.3987L2.47978 16.9238L1.51953 18.0761L4.51968 20.5761L4.99983 20.9762L5.47995 20.5761L8.47981 18.0761L7.5195 16.9238L5.7498 18.3986V3.99993H4.2498Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontextformatjustified.displayName = 'Icontextformatjustified'

export default Icontextformatjustified
