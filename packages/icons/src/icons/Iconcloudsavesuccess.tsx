import React from 'react'

export interface IconcloudsavesuccessProps extends React.SVGProps<SVGSVGElement> {}

/**
 * cloud_save_success
 * @source figma
 */
export const Iconcloudsavesuccess = React.memo((props: IconcloudsavesuccessProps) => {
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
        d="M5.81432 7.29442C6.85685 4.91427 9.23322 3.25 12 3.25C14.7668 3.25 17.1431 4.91427 18.1857 7.29442C20.7614 7.63053 22.75 9.83289 22.75 12.5C22.75 14.8783 21.1686 16.8872 19 17.5326V15.938C20.3244 15.3593 21.25 14.0377 21.25 12.5C21.25 10.4736 19.6424 8.82234 17.6334 8.75232L17.1225 8.73451L16.9523 8.25236C16.2319 6.211 14.2856 4.75 12 4.75C9.71438 4.75 7.76807 6.211 7.04768 8.25236L6.87754 8.73451L6.36655 8.75232C4.35756 8.82234 2.75 10.4736 2.75 12.5C2.75 14.0377 3.67557 15.3593 5 15.938V17.5326C2.83138 16.8872 1.25 14.8783 1.25 12.5C1.25 9.83289 3.23861 7.63053 5.81432 7.29442Z"
        fill="#222529"
      />
      <path
        d="M17.0303 14.5303L11 20.5607L7.96967 17.5303L9.03033 16.4697L11 18.4393L15.9697 13.4697L17.0303 14.5303Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcloudsavesuccess.displayName = 'Iconcloudsavesuccess'

export default Iconcloudsavesuccess
