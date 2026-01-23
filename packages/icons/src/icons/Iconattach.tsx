import React from 'react'

export interface IconattachProps extends React.SVGProps<SVGSVGElement> {}

/**
 * attach
 * @source figma
 */
export const Iconattach = React.memo((props: IconattachProps) => {
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
        d="M10.0371 3.75C8.22169 3.75 6.75 5.22169 6.75 7.03712V15C6.75 17.8995 9.10051 20.25 12 20.25C14.8995 20.25 17.25 17.8995 17.25 15V7.5C17.25 7.08579 17.5858 6.75 18 6.75C18.4142 6.75 18.75 7.08579 18.75 7.5V15C18.75 18.7279 15.7279 21.75 12 21.75C8.27208 21.75 5.25 18.7279 5.25 15V7.03712C5.25 4.39327 7.39327 2.25 10.0371 2.25C12.681 2.25 14.8242 4.39327 14.8242 7.03712V14.463C14.8242 16.0022 13.5764 17.25 12.0372 17.25C10.498 17.25 9.25016 16.0022 9.25016 14.463V7.5C9.25016 7.08579 9.58595 6.75 10.0002 6.75C10.4144 6.75 10.7502 7.08579 10.7502 7.5V14.463C10.7502 15.1738 11.3264 15.75 12.0372 15.75C12.748 15.75 13.3242 15.1738 13.3242 14.463V7.03712C13.3242 5.22169 11.8525 3.75 10.0371 3.75Z"
        fill="black"
      />
    </svg>
  )
})

Iconattach.displayName = 'Iconattach'

export default Iconattach
