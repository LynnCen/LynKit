import React from 'react'

export interface IconlayoutdownmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * layout_down_multiple
 * @source figma
 */
export const Iconlayoutdownmultiple = React.memo((props: IconlayoutdownmultipleProps) => {
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
        d="M5 19.5001H19C19.2761 19.5001 19.5 19.2762 19.5 19.0001V15.0001C19.5 14.7239 19.2761 14.5001 19 14.5001H17V13.0001H19C20.1046 13.0001 21 13.8955 21 15.0001V19.0001C21 20.1046 20.1046 21.0001 19 21.0001H5C3.89543 21.0001 3 20.1046 3 19.0001V15.0001C3 13.8955 3.89543 13.0001 5 13.0001H7V14.5001H5C4.72386 14.5001 4.5 14.7239 4.5 15.0001V19.0001C4.5 19.2762 4.72386 19.5001 5 19.5001Z"
        fill="#222529"
      />
      <path
        d="M16.4687 9.61691L15.5313 10.7879L12.75 8.56123V15.0001H11.25V8.56123L8.46873 10.7879L7.53127 9.61691L12 6.03931L16.4687 9.61691Z"
        fill="#222529"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 3.25H3V4.75H21V3.25Z" fill="#B4B8BF" />
    </svg>
  )
})

Iconlayoutdownmultiple.displayName = 'Iconlayoutdownmultiple'

export default Iconlayoutdownmultiple
