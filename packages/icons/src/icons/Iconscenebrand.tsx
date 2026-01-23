import React from 'react'

export interface IconscenebrandProps extends React.SVGProps<SVGSVGElement> {}

/**
 * scene_brand
 * @source figma
 */
export const Iconscenebrand = React.memo((props: IconscenebrandProps) => {
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
        d="M14.1321 16.0302H15.8721L13.6041 12.8502C14.7801 12.5262 15.6081 11.6862 15.6081 10.2942C15.6081 8.65025 14.4201 7.63025 12.4881 7.63025H8.74414V16.0302H10.2201V13.1022H12.0681L14.1321 16.0302ZM12.3681 8.97425C13.4601 8.97425 14.1081 9.45425 14.1081 10.3782C14.1081 11.2422 13.4361 11.7942 12.3801 11.7942H10.2201V8.97425H12.3681Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z"
        fill="black"
      />
    </svg>
  )
})

Iconscenebrand.displayName = 'Iconscenebrand'

export default Iconscenebrand
