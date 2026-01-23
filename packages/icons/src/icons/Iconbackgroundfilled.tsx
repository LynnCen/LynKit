import React from 'react'

export interface IconbackgroundfilledProps extends React.SVGProps<SVGSVGElement> {}

/**
 * background_filled
 * @source figma
 */
export const Iconbackgroundfilled = React.memo((props: IconbackgroundfilledProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M14.0711 3H11.2427L3 11.2427V14.0711L14.0711 3Z" fill="#222529" />
      <path
        d="M3.10037 19.6273C3.03524 19.43 3 19.2191 3 19V16.8993L16.8993 3H19C19.2191 3 19.43 3.03524 19.6273 3.10037L3.10037 19.6273Z"
        fill="#222529"
      />
      <path
        d="M7.3847 21H5C4.86192 21 4.72711 20.986 4.59691 20.9594L20.9594 4.59691C20.986 4.72711 21 4.86192 21 5V7.3847L7.3847 21Z"
        fill="#222529"
      />
      <path d="M13.0413 21H10.2129L21 10.2129V13.0413L13.0413 21Z" fill="#222529" />
      <path d="M18.6983 21H15.8699L21 15.8699V18.6983L18.6983 21Z" fill="#222529" />
      <path d="M3 8.41412L8.41412 3H5.58569L3 5.58569V8.41412Z" fill="#222529" />
    </svg>
  )
})

Iconbackgroundfilled.displayName = 'Iconbackgroundfilled'

export default Iconbackgroundfilled
