import React from 'react'

export interface IconeditsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * edit_small
 * @source figma
 */
export const Iconeditsmall = React.memo((props: IconeditsmallProps) => {
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
        d="M6.81348 15.1543L6.25387 17.7863L8.88032 17.2211L18.4788 7.58935C18.3327 6.5194 17.4834 5.66929 16.411 5.52344L6.81348 15.1543ZM9.54229 18.6142C9.59829 18.6022 9.64961 18.5742 9.69007 18.5336L19.8092 8.37931C19.9312 8.2569 19.9997 8.091 19.9997 7.91802C19.9998 5.75419 18.2428 3.99999 16.0827 3.99999C15.9094 3.99999 15.7427 4.06905 15.6202 4.19195L5.50192 14.3454C5.46145 14.386 5.43358 14.4375 5.42165 14.4936L4.40146 19.2917C4.35662 19.5027 4.54374 19.6898 4.75422 19.6445L9.54229 18.6142Z"
        fill="black"
      />
    </svg>
  )
})

Iconeditsmall.displayName = 'Iconeditsmall'

export default Iconeditsmall
