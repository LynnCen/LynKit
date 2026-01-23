import React from 'react'

export interface IconmosaicboldProps extends React.SVGProps<SVGSVGElement> {}

/**
 * mosaic_bold
 * @source figma
 */
export const Iconmosaicbold = React.memo((props: IconmosaicboldProps) => {
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
        d="M2.8501 5.0001C2.8501 3.81268 3.81269 2.8501 5.0001 2.8501H19.0001C20.1875 2.8501 21.1501 3.81269 21.1501 5.0001V19.0001C21.1501 20.1875 20.1875 21.1501 19.0001 21.1501H5.0001C3.81268 21.1501 2.8501 20.1875 2.8501 19.0001V5.0001ZM5.0001 4.6501C4.8068 4.6501 4.6501 4.8068 4.6501 5.0001V19.0001C4.6501 19.1934 4.8068 19.3501 5.0001 19.3501H19.0001C19.1934 19.3501 19.3501 19.1934 19.3501 19.0001V5.0001C19.3501 4.8068 19.1934 4.6501 19.0001 4.6501H5.0001ZM9.60012 18V14.5H6.00012V18H9.60012ZM9.60012 6V9.5H6.00012V6H9.60012ZM13.8003 13.75V10.25H10.2003V13.75H13.8003ZM18.0005 14.5V18H14.4005V14.5H18.0005Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmosaicbold.displayName = 'Iconmosaicbold'

export default Iconmosaicbold
