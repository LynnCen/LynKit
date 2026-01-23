import React from 'react'

export interface IconaistarfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * ai_star_fill
 * @source figma
 */
export const Iconaistarfill = React.memo((props: IconaistarfillProps) => {
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
        d="M10.5292 4.35435C10.8507 2.74659 13.1493 2.74658 13.4709 4.35436L14.1732 7.8657C14.3711 8.85535 15.1447 9.62893 16.1343 9.82686L19.6457 10.5291C21.2534 10.8507 21.2534 13.1493 19.6457 13.4709L16.1343 14.1731C15.1447 14.3711 14.3711 15.1446 14.1732 16.1343L13.4709 19.6456C13.1494 21.2534 10.8507 21.2534 10.5292 19.6456L9.82689 16.1343C9.62896 15.1446 8.85538 14.3711 7.86573 14.1731L4.35438 13.4709C2.74662 13.1493 2.74661 10.8507 4.35439 10.5291L7.86573 9.82686C8.85538 9.62893 9.62896 8.85535 9.82689 7.8657L10.5292 4.35435Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconaistarfill.displayName = 'Iconaistarfill'

export default Iconaistarfill
