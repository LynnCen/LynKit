import React from 'react'

export interface IconaddvideoProps extends React.SVGProps<SVGSVGElement> {}

/**
 * add_video
 * @source figma
 */
export const Iconaddvideo = React.memo((props: IconaddvideoProps) => {
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
        d="M4.75 6C4.75 5.30964 5.30964 4.75 6 4.75H9V3.25H6C4.48122 3.25 3.25 4.48122 3.25 6V9H4.75V6Z"
        fill="black"
      />
      <path
        d="M15 4.75H18C18.6904 4.75 19.25 5.30964 19.25 6V9H20.75V6C20.75 4.48122 19.5188 3.25 18 3.25H15V4.75Z"
        fill="black"
      />
      <path
        d="M4.75 18V15H3.25V18C3.25 19.5188 4.48122 20.75 6 20.75H9V19.25H6C5.30964 19.25 4.75 18.6904 4.75 18Z"
        fill="black"
      />
      <path
        d="M19.25 15V18C19.25 18.6904 18.6904 19.25 18 19.25H15V20.75H18C19.5188 20.75 20.75 19.5188 20.75 18V15H19.25Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9275 7.32025C9.76191 6.59176 8.25 7.42974 8.25 8.80425V15.1958C8.25 16.5703 9.76191 17.4082 10.9275 16.6797L16.0407 13.484C17.1374 12.7986 17.1374 11.2014 16.0407 10.516L10.9275 7.32025ZM9.75 8.80425C9.75 8.60789 9.96599 8.48818 10.1325 8.59225L15.2457 11.788C15.4024 11.8859 15.4024 12.1141 15.2457 12.212L10.1325 15.4078C9.96599 15.5118 9.75 15.3921 9.75 15.1958V8.80425Z"
        fill="black"
      />
    </svg>
  )
})

Iconaddvideo.displayName = 'Iconaddvideo'

export default Iconaddvideo
