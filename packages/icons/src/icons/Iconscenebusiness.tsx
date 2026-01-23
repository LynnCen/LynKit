import React from 'react'

export interface IconscenebusinessProps extends React.SVGProps<SVGSVGElement> {}

/**
 * scene_business
 * @source figma
 */
export const Iconscenebusiness = React.memo((props: IconscenebusinessProps) => {
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
        d="M16.3594 2.97729C15.9452 2.97729 15.6094 3.31308 15.6094 3.72729V19.061C15.6094 19.4752 15.9452 19.811 16.3594 19.811H19.3594C19.7736 19.811 20.1094 19.4752 20.1094 19.061V3.72729C20.1094 3.31308 19.7736 2.97729 19.3594 2.97729H16.3594ZM17.1094 18.311V4.47729H18.6094V18.311H17.1094ZM9.75 7.47058C9.75 7.05637 10.0858 6.72058 10.5 6.72058H13.5C13.9142 6.72058 14.25 7.05637 14.25 7.47058V19.061C14.25 19.4752 13.9142 19.811 13.5 19.811H10.5C10.0858 19.811 9.75 19.4752 9.75 19.061V7.47058ZM11.25 8.22058V18.311H12.75V8.22058H11.25ZM3.89062 12.3793C3.89062 11.9651 4.22641 11.6293 4.64062 11.6293H7.64062C8.05484 11.6293 8.39062 11.9651 8.39062 12.3793V19.061C8.39062 19.4752 8.05484 19.811 7.64062 19.811H4.64062C4.22641 19.811 3.89062 19.4752 3.89062 19.061V12.3793ZM5.39062 13.1293V18.311H6.89062V13.1293H5.39062Z"
        fill="black"
      />
    </svg>
  )
})

Iconscenebusiness.displayName = 'Iconscenebusiness'

export default Iconscenebusiness
