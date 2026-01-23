import React from 'react'

export interface IcontransformProps extends React.SVGProps<SVGSVGElement> {}

/**
 * transform
 * @source figma
 */
export const Icontransform = React.memo((props: IcontransformProps) => {
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
        d="M5.03039 10.0304L8.25006 6.81075L8.25006 20.0001L9.75006 20.0001L9.75006 5.00009L9.75006 3.18943L8.46973 4.46976L3.96973 8.96976L5.03039 10.0304ZM18.9698 13.9698L15.7501 17.1894L15.7501 4.00009L14.2501 4.00009L14.2501 19.0001L14.2501 20.8107L15.5304 19.5304L20.0304 15.0304L18.9698 13.9698Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontransform.displayName = 'Icontransform'

export default Icontransform
