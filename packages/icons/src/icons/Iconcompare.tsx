import React from 'react'

export interface IconcompareProps extends React.SVGProps<SVGSVGElement> {}

/**
 * compare
 * @source figma
 */
export const Iconcompare = React.memo((props: IconcompareProps) => {
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
        d="M12.75 2.25H11.25V4.25H4.75C3.7835 4.25 3 5.0335 3 6V18C3 18.9665 3.7835 19.75 4.75 19.75H11.25V21.75H12.75L12.75 2.25ZM11.25 18.25L11.25 5.75H4.75C4.61193 5.75 4.5 5.86193 4.5 6V18C4.5 18.1381 4.61193 18.25 4.75 18.25H11.25Z"
        fill="#222529"
      />
      <path d="M14.2461 4.25H16.317V5.75H14.2461V4.25Z" fill="#222529" />
      <path
        d="M19.25 18.25H17.817V19.75H19.25C20.2165 19.75 21 18.9665 21 18V16.583L19.5 16.583V18C19.5 18.1381 19.3881 18.25 19.25 18.25Z"
        fill="#222529"
      />
      <path d="M21 12.7499V15.083L19.5 15.083V12.7499H21Z" fill="#222529" />
      <path d="M19.5 11.2499V8.91698H21V11.2499H19.5Z" fill="#222529" />
      <path
        d="M19.5 6V7.41698H21V6C21 5.0335 20.2165 4.25 19.25 4.25H17.817V5.75H19.25C19.3881 5.75 19.5 5.86193 19.5 6Z"
        fill="#222529"
      />
      <path d="M14.2461 18.25H16.317V19.75H14.2461V18.25Z" fill="#222529" />
    </svg>
  )
})

Iconcompare.displayName = 'Iconcompare'

export default Iconcompare
