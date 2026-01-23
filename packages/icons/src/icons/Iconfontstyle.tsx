import React from 'react'

export interface IconfontstyleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * font_style
 * @source figma
 */
export const Iconfontstyle = React.memo((props: IconfontstyleProps) => {
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
        d="M9.75 3H9.14553L9.01712 3.59068L7.76748 9.33899L7.76712 9.34068L6.26786 16.0873L6.06504 17H7H14.0427C15.9761 17 17.65 15.6572 18.0694 13.7698C18.4145 12.217 17.8393 10.7123 16.7499 9.76185C17.6089 9.26377 18.2524 8.41975 18.4751 7.39506C18.9663 5.13559 17.2451 3 14.9328 3H9.75ZM7.93496 15.5L9.10163 10.25H12.75H14.0427C15.722 10.25 16.9695 11.8051 16.6052 13.4444C16.3383 14.6455 15.273 15.5 14.0427 15.5H7.93496ZM14.0427 8.75H12.75H9.43056L10.3545 4.5H14.9328C16.2883 4.5 17.2973 5.7519 17.0093 7.07641C16.797 8.05325 15.9325 8.75 14.9328 8.75H14.0427ZM3 21H21V19.5H3V21Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfontstyle.displayName = 'Iconfontstyle'

export default Iconfontstyle
