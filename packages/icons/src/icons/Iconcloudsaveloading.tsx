import React from 'react'

export interface IconcloudsaveloadingProps extends React.SVGProps<SVGSVGElement> {}

/**
 * cloud_save_loading
 * @source figma
 */
export const Iconcloudsaveloading = React.memo((props: IconcloudsaveloadingProps) => {
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
        d="M12 3.25C9.23322 3.25 6.85685 4.91427 5.81432 7.29442C3.23861 7.63053 1.25 9.83289 1.25 12.5C1.25 14.8783 2.83138 16.8872 5 17.5326V15.938C3.67557 15.3593 2.75 14.0377 2.75 12.5C2.75 10.4736 4.35756 8.82234 6.36655 8.75232L6.87754 8.73451L7.04768 8.25236C7.76807 6.211 9.71438 4.75 12 4.75C14.2856 4.75 16.2319 6.211 16.9523 8.25236L17.1225 8.73451L17.6334 8.75232C19.6424 8.82234 21.25 10.4736 21.25 12.5C21.25 14.0377 20.3244 15.3593 19 15.938V17.5326C21.1686 16.8872 22.75 14.8783 22.75 12.5C22.75 9.83289 20.7614 7.63052 18.1857 7.29442C17.1431 4.91427 14.7668 3.25 12 3.25Z"
        fill="#222529"
      />
      <path d="M9.75 18H11.25V19.5H9.75V18Z" fill="#222529" />
      <path d="M14.25 18H12.75V19.5H14.25V18Z" fill="#222529" />
      <path d="M15.75 18H17.25V19.5H15.75V18Z" fill="#222529" />
      <path d="M8.25 18H6.75V19.5H8.25V18Z" fill="#222529" />
    </svg>
  )
})

Iconcloudsaveloading.displayName = 'Iconcloudsaveloading'

export default Iconcloudsaveloading
