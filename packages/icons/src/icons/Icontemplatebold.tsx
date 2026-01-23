import React from 'react'

export interface IcontemplateboldProps extends React.SVGProps<SVGSVGElement> {}

/**
 * template_bold
 * @source figma
 */
export const Icontemplatebold = React.memo((props: IcontemplateboldProps) => {
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
        d="M5.0001 2.8501C3.81269 2.8501 2.8501 3.81268 2.8501 5.0001V19.0001C2.8501 20.1875 3.81269 21.1501 5.0001 21.1501H14.2501C14.9648 21.1501 15.5981 20.8013 15.989 20.2647L18.3056 20.6732C19.475 20.8794 20.5901 20.0985 20.7963 18.9292L22.5785 8.82191C22.7847 7.65253 22.0039 6.53742 20.8345 6.33123L16.4001 5.54932V5.0001C16.4001 3.81269 15.4375 2.8501 14.2501 2.8501H5.0001ZM16.4001 7.37709V18.5094L18.6182 18.9005C18.8086 18.9341 18.9901 18.807 19.0236 18.6166L20.8058 8.50934C20.8394 8.31898 20.7123 8.13745 20.5219 8.10388L16.4001 7.37709ZM4.6501 5.0001C4.6501 4.8068 4.8068 4.6501 5.0001 4.6501H14.2501C14.4434 4.6501 14.6001 4.8068 14.6001 5.0001V19.0001C14.6001 19.1934 14.4434 19.3501 14.2501 19.3501H5.0001C4.8068 19.3501 4.6501 19.1934 4.6501 19.0001V5.0001Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontemplatebold.displayName = 'Icontemplatebold'

export default Icontemplatebold
