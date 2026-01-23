import React from 'react'

export interface IconhuabanfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * huaban_fill
 * @source figma
 */
export const Iconhuabanfill = React.memo((props: IconhuabanfillProps) => {
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
        d="M7.69047 3.00012C8.79799 3.00012 9.87396 3.13545 10.9027 3.39049C7.62878 5.49009 5.43762 9.13763 5.43762 13.3009V15.3689C3.90236 13.1992 3.00012 10.5498 3.00012 7.68986V3.00012H7.69047Z"
        fill="black"
      />
      <path
        d="M16.3095 20.9999C13.45 20.9999 10.8008 20.0977 8.63113 18.5624H10.6623C14.84 18.5624 18.4987 16.3523 20.6017 13.0664C20.8618 14.1047 20.9999 15.1913 20.9999 16.3102V20.9999H16.3095Z"
        fill="black"
      />
      <path
        d="M20.9896 6.63034C20.9896 12.319 16.3649 17.0624 10.6623 17.0624H6.93762V13.3009C6.93762 7.61296 11.6467 3.00012 17.35 3.00012H20.9896V6.63034Z"
        fill="black"
      />
    </svg>
  )
})

Iconhuabanfill.displayName = 'Iconhuabanfill'

export default Iconhuabanfill
