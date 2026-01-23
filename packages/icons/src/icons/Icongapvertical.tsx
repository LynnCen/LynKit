import React from 'react'

export interface IcongapverticalProps extends React.SVGProps<SVGSVGElement> {}

/**
 * gap_vertical
 * @source figma
 */
export const Icongapvertical = React.memo((props: IcongapverticalProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M20.4999 5.74999L3.49999 5.74999V4.24999H20.4999V5.74999Z" fill="black" />
      <path d="M20.4999 19.7499L3.49999 19.7499V18.25L20.4999 18.25V19.7499Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.74999 13.5C4.74999 15.0187 5.9812 16.25 7.49998 16.25H16.5C18.0187 16.25 19.25 15.0187 19.25 13.5V10.5C19.25 8.98119 18.0187 7.74998 16.5 7.74998L7.49998 7.74998C5.9812 7.74998 4.74999 8.98119 4.74999 10.5L4.74999 13.5ZM7.49998 14.75C6.80963 14.75 6.24998 14.1903 6.24998 13.5V10.5C6.24998 9.80962 6.80963 9.24998 7.49998 9.24998L16.5 9.24998C17.1903 9.24998 17.75 9.80962 17.75 10.5V13.5C17.75 14.1903 17.1903 14.75 16.5 14.75H7.49998Z"
        fill="black"
      />
    </svg>
  )
})

Icongapvertical.displayName = 'Icongapvertical'

export default Icongapvertical
