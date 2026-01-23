import React from 'react'

export interface IcontransferProps extends React.SVGProps<SVGSVGElement> {}

/**
 * transfer
 * @source figma
 */
export const Icontransfer = React.memo((props: IcontransferProps) => {
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
        d="M13.9698 5.03039L17.1895 8.25006H4.00011V9.75006H19.0001H20.8108L19.5304 8.46973L15.0304 3.96973L13.9698 5.03039ZM10.0304 18.9698L6.81077 15.7501H20.0001V14.2501H5.00011H3.18945L4.46978 15.5304L8.96978 20.0304L10.0304 18.9698Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontransfer.displayName = 'Icontransfer'

export default Icontransfer
