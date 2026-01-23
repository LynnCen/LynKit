import React from 'react'

export interface IconapplefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * apple_fill
 * @source figma
 */
export const Iconapplefill = React.memo((props: IconapplefillProps) => {
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
        d="M21.7531 16.7271C21.2176 17.9137 20.9621 18.4457 20.2725 19.4922C19.3135 20.9588 17.9555 22.7858 16.2754 22.7963C14.7843 22.8104 14.3993 21.8233 12.3727 21.8408C10.3462 21.8478 9.92265 22.8139 8.4281 22.7999C6.75153 22.7858 5.46699 21.1373 4.50445 19.6777C1.81285 15.5791 1.52934 10.7734 3.1919 8.21831C4.36795 6.40524 6.23002 5.3412 7.98008 5.3412C9.75815 5.3412 10.8782 6.31774 12.3517 6.31774C13.7798 6.31774 14.6478 5.3377 16.7094 5.3377C18.2635 5.3377 19.912 6.18473 21.0881 7.65129C17.2379 9.75836 17.8644 15.2571 21.7531 16.7271ZM15.1448 3.69964C15.8939 2.7406 16.4609 1.38255 16.2579 0C15.0328 0.0840031 13.6048 0.864532 12.7683 1.87257C12.0122 2.7931 11.3857 4.16165 11.6307 5.4847C12.9643 5.52671 14.3433 4.73218 15.1448 3.69964Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconapplefill.displayName = 'Iconapplefill'

export default Iconapplefill
