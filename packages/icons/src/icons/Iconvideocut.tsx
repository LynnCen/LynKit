import React from 'react'

export interface IconvideocutProps extends React.SVGProps<SVGSVGElement> {}

/**
 * video_cut
 * @source figma
 */
export const Iconvideocut = React.memo((props: IconvideocutProps) => {
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
        d="M14.7805 12.094L9.95467 9.03761V15.1503L14.7805 12.094ZM10.2971 16.709L16.1842 12.9805C16.3153 12.8975 16.4263 12.7865 16.5093 12.6554C16.8194 12.1658 16.6738 11.5175 16.1842 11.2075L10.2971 7.47893C10.105 7.35727 9.88227 7.29268 9.65489 7.29268C8.99203 7.29268 8.45467 7.83003 8.45467 8.4929V15.695C8.45467 15.9224 8.51926 16.1451 8.64092 16.3372C8.99559 16.8972 9.73707 17.0637 10.2971 16.709Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconvideocut.displayName = 'Iconvideocut'

export default Iconvideocut
