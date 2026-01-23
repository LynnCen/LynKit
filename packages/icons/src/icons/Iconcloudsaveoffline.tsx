import React from 'react'

export interface IconcloudsaveofflineProps extends React.SVGProps<SVGSVGElement> {}

/**
 * cloud_save_offline
 * @source figma
 */
export const Iconcloudsaveoffline = React.memo((props: IconcloudsaveofflineProps) => {
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
        d="M12 3.25C13.4682 3.25 14.8264 3.71862 15.9337 4.51415L14.8965 5.62056C14.066 5.07032 13.0702 4.75 12 4.75C9.71438 4.75 7.76807 6.211 7.04768 8.25236L6.87754 8.73451L6.36655 8.75232C4.35756 8.82234 2.75 10.4736 2.75 12.5C2.75 14.0996 3.75157 15.4653 5.16181 16.0042L4.07869 17.1595C2.39782 16.2843 1.25 14.5262 1.25 12.5C1.25 9.83289 3.23861 7.63053 5.81432 7.29442C6.85685 4.91427 9.23322 3.25 12 3.25Z"
        fill="#222529"
      />
      <path
        d="M5.646 17.6809L16.0167 6.61895C16.0167 6.61892 16.0167 6.61897 16.0167 6.61895L17.0479 5.51888C17.0479 5.51886 17.0479 5.5189 17.0479 5.51888L18.9528 3.48704L20.0472 4.51296L5.04715 20.513L3.95285 19.487L5.646 17.6809C5.64603 17.6809 5.64597 17.6809 5.646 17.6809Z"
        fill="#222529"
      />
      <path
        d="M11.0997 16.25L9.69341 17.75H17.5C20.3995 17.75 22.75 15.3995 22.75 12.5C22.75 10.2161 21.2917 8.27291 19.2553 7.55067L18.088 8.79578C19.8795 9.07779 21.25 10.629 21.25 12.5C21.25 14.5711 19.5711 16.25 17.5 16.25H11.0997Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcloudsaveoffline.displayName = 'Iconcloudsaveoffline'

export default Iconcloudsaveoffline
