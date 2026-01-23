import React from 'react'

export interface IconimagestyleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * image_style
 * @source figma
 */
export const Iconimagestyle = React.memo((props: IconimagestyleProps) => {
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
        d="M19.0804 4.91964L18 2L16.9196 4.91964L14 6L16.9196 7.08036L18 10L19.0804 7.08036L22 6L19.0804 4.91964Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 4.5C4.25 4.36193 4.36193 4.25 4.5 4.25H14.5V2.75H4.5C3.5335 2.75 2.75 3.5335 2.75 4.5V19.5C2.75 20.4665 3.5335 21.25 4.5 21.25H20C20.9665 21.25 21.75 20.4665 21.75 19.5V9.5H20.25V13.9023L15.9793 9.96013L12.8993 13.0401L8.47926 8.96013L4.25 13.1894V4.5ZM19.9039 15.6242L20.25 15.2492V19.5C20.25 19.6381 20.1381 19.75 20 19.75H4.5C4.36193 19.75 4.25 19.6381 4.25 19.5V15.2866L4.26208 15.2986L8.52084 11.0399L14.4913 16.5511L15.5088 15.4489L14.0023 14.0584L16.0208 12.0399L19.9039 15.6242Z"
        fill="black"
      />
    </svg>
  )
})

Iconimagestyle.displayName = 'Iconimagestyle'

export default Iconimagestyle
