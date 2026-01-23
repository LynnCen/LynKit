import React from 'react'

export interface IconbrandfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * brand_fill
 * @source figma
 */
export const Iconbrandfill = React.memo((props: IconbrandfillProps) => {
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
        d="M9.25 7.25H12.75C14.4069 7.25 15.75 8.59315 15.75 10.25C15.75 11.5122 14.9704 12.5924 13.8665 13.0353L16.5613 16.5H14.661L12.1332 13.25H10.75V16.5H9.25V7.25ZM10.75 11.75H12.75C13.5784 11.75 14.25 11.0784 14.25 10.25C14.25 9.42157 13.5784 8.75 12.75 8.75H10.75V11.75Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconbrandfill.displayName = 'Iconbrandfill'

export default Iconbrandfill
