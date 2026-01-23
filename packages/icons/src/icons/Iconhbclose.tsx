import React from 'react'

export interface IconhbcloseProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_close
 * @source figma
 */
export const Iconhbclose = React.memo((props: IconhbcloseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M5 5L19 19M5 19L19 5" stroke="black" strokeWidth={2} strokeLinecap="round" />
      <path
        d="M18.2929 4.29311C18.6834 3.90264 19.3164 3.90261 19.707 4.29311C20.0974 4.68363 20.0974 5.31668 19.707 5.70718L13.414 12.0001L19.707 18.2931L19.7753 18.3693C20.0956 18.762 20.073 19.3411 19.707 19.7072C19.3409 20.0733 18.7618 20.0958 18.3691 19.7755L18.2929 19.7072L11.9999 13.4142L5.70696 19.7072C5.31647 20.0977 4.68343 20.0976 4.29289 19.7072C3.90237 19.3167 3.90237 18.6836 4.29289 18.2931L10.5859 12.0001L4.29289 5.70718C3.90237 5.31665 3.90237 4.68364 4.29289 4.29311C4.68342 3.90264 5.31645 3.90261 5.70696 4.29311L11.9999 10.5861L18.2929 4.29311Z"
        fill="black"
      />
    </svg>
  )
})

Iconhbclose.displayName = 'Iconhbclose'

export default Iconhbclose
