import React from 'react'

export interface IconformatpainterProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_painter
 * @source figma
 */
export const Iconformatpainter = React.memo((props: IconformatpainterProps) => {
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
        d="M20 9.75C20 10.7165 19.2165 11.5 18.25 11.5H5.75C4.7835 11.5 4 10.7165 4 9.75V4.75C4 3.7835 4.7835 3 5.75 3H18.25C19.2165 3 20 3.7835 20 4.75V6.5H20.5C21.3284 6.5 22 7.17157 22 8V11.25C22 13.3211 20.3211 15 18.25 15H12.75V16.1338C13.0489 16.3067 13.25 16.6299 13.25 17V21C13.25 21.5523 12.8023 22 12.25 22H11.75C11.1977 22 10.75 21.5523 10.75 21V17C10.75 16.6299 10.9511 16.3067 11.25 16.1338V15C11.25 14.1716 11.9216 13.5 12.75 13.5H18.25C19.4926 13.5 20.5 12.4926 20.5 11.25V8H20V9.75ZM18.25 10C18.3881 10 18.5 9.88807 18.5 9.75V4.75C18.5 4.61193 18.3881 4.5 18.25 4.5L5.75 4.5C5.61193 4.5 5.5 4.61193 5.5 4.75L5.5 9.75C5.5 9.88807 5.61193 10 5.75 10L18.25 10Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconformatpainter.displayName = 'Iconformatpainter'

export default Iconformatpainter
