import React from 'react'

export interface Icontext2videofillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text2video_fill
 * @source figma
 */
export const Icontext2videofill = React.memo((props: Icontext2videofillProps) => {
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
        d="M16.8447 15.0741C16.8447 14.3378 17.661 13.8947 18.2783 14.2958L22.4893 17.0331C23.0518 17.399 23.0517 18.2227 22.4893 18.5887L18.2783 21.326C17.661 21.7273 16.8449 21.2849 16.8447 20.5487V15.0741Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 2.99986C20.1044 2.9999 20.9999 3.89545 21 4.99986V13.5907L19.0664 12.3338C17.2916 11.1799 14.9434 12.4542 14.9434 14.5711V20.9999H5C3.89546 20.9998 3.00003 20.1044 3 18.9999V4.99986C3.00012 3.8954 3.89552 2.99988 5 2.99986C9.66667 2.99978 14.3333 2.99968 19 2.99986ZM8 9.12974H11.25V16.369H12.75V9.12974H16V7.62974H8V9.12974Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontext2videofill.displayName = 'Icontext2videofill'

export default Icontext2videofill
