import React from 'react'

export interface IconfitProps extends React.SVGProps<SVGSVGElement> {}

/**
 * fit
 * @source figma
 */
export const Iconfit = React.memo((props: IconfitProps) => {
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
        d="M15.4687 5.18372L12 7.96074L8.53127 5.18372L9.46873 4.01276L11.25 5.43882V1H12.75V5.43882L14.5313 4.01276L15.4687 5.18372Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 9C2.89543 9 2 9.89543 2 11V13C2 14.1046 2.89543 15 4 15H20C21.1046 15 22 14.1046 22 13V11C22 9.89543 21.1046 9 20 9H4ZM4 10.5C3.72386 10.5 3.5 10.7239 3.5 11V13C3.5 13.2761 3.72386 13.5 4 13.5H20C20.2761 13.5 20.5 13.2761 20.5 13V11C20.5 10.7239 20.2761 10.5 20 10.5H4Z"
        fill="#222529"
      />
      <path
        d="M8.53127 18.8163L9.46873 19.9872L11.25 18.5612V23H12.75V18.5612L14.5313 19.9872L15.4687 18.8163L12 16.0393L8.53127 18.8163Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfit.displayName = 'Iconfit'

export default Iconfit
