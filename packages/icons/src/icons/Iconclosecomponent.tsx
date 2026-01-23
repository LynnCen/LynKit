import React from 'react'

export interface IconclosecomponentProps extends React.SVGProps<SVGSVGElement> {}

/**
 * close_component
 * @source figma
 */
export const Iconclosecomponent = React.memo((props: IconclosecomponentProps) => {
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
        d="M13.0607 11.9996L15.7126 14.6516L14.6519 15.7122L12 13.0603L9.34795 15.7123L8.28729 14.6517L10.9393 11.9996L8.28797 9.34826L9.34863 8.2876L12 10.939L14.6513 8.28773L15.7119 9.34839L13.0607 11.9996Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z"
        fill="black"
      />
    </svg>
  )
})

Iconclosecomponent.displayName = 'Iconclosecomponent'

export default Iconclosecomponent
