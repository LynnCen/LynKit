import React from 'react'

export interface IconfiltermatterProps extends React.SVGProps<SVGSVGElement> {}

/**
 * filter_matter
 * @source figma
 */
export const Iconfiltermatter = React.memo((props: IconfiltermatterProps) => {
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
        d="M9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H9Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.55425 3.25C5.95087 3.25 5.39004 3.56083 5.07025 4.0725L2.864 7.6025C2.7895 7.7217 2.75 7.85944 2.75 8V18.5C2.75 20.0188 3.98122 21.25 5.5 21.25H18.5C20.0188 21.25 21.25 20.0188 21.25 18.5V8C21.25 7.85944 21.2105 7.7217 21.136 7.6025L18.9297 4.0725C18.61 3.56083 18.0491 3.25 17.4458 3.25H6.55425ZM6.34225 4.8675C6.38793 4.79441 6.46805 4.75 6.55425 4.75H17.4458C17.532 4.75 17.6121 4.7944 17.6578 4.8675L19.1468 7.25H4.85319L6.34225 4.8675ZM4.25 8.75H19.75V18.5C19.75 19.1904 19.1904 19.75 18.5 19.75H5.5C4.80964 19.75 4.25 19.1904 4.25 18.5V8.75Z"
        fill="black"
      />
    </svg>
  )
})

Iconfiltermatter.displayName = 'Iconfiltermatter'

export default Iconfiltermatter
