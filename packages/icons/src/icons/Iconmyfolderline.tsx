import React from 'react'

export interface IconmyfolderlineProps extends React.SVGProps<SVGSVGElement> {}

/**
 * myfolder_line
 * @source figma
 */
export const Iconmyfolderline = React.memo((props: IconmyfolderlineProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M11.25 9.75H5.75V8.25H11.25V9.75Z" fill="#4C535C" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.0752 3.5C9.5509 3.5 10.0111 3.66983 10.373 3.97852L11.7832 5.18066C12.0999 5.45065 12.4917 5.61373 12.9033 5.65039L13.0811 5.65918H19.5C20.6046 5.65918 21.5 6.55461 21.5 7.65918V18.5C21.5 19.6046 20.6046 20.5 19.5 20.5H4.5C3.39543 20.5 2.5 19.6046 2.5 18.5V5.5C2.5 4.39543 3.39543 3.5 4.5 3.5H9.0752ZM4.5 5C4.22386 5 4 5.22386 4 5.5V18.5C4 18.7761 4.22386 19 4.5 19H19.5C19.7761 19 20 18.7761 20 18.5V7.65918C20 7.38304 19.7761 7.15918 19.5 7.15918H13.0811C12.2487 7.15918 11.443 6.86236 10.8096 6.32227L9.40039 5.11914C9.3099 5.04197 9.19412 5 9.0752 5H4.5Z"
        fill="#4C535C"
      />
    </svg>
  )
})

Iconmyfolderline.displayName = 'Iconmyfolderline'

export default Iconmyfolderline
