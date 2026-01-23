import React from 'react'

export interface IconhbmineProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_mine
 * @source figma
 */
export const Iconhbmine = React.memo((props: IconhbmineProps) => {
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
        d="M16.8004 13.2006C19.4514 13.2006 21.6004 15.3496 21.6004 18.0006V21.6006H2.40039V18.0006C2.40039 15.3496 4.54942 13.2006 7.20039 13.2006H16.8004ZM7.20039 15.3604C5.74236 15.3604 4.56016 16.5426 4.56016 18.0006V19.4397H19.4406V18.0006C19.4406 16.5426 18.2584 15.3604 16.8004 15.3604H7.20039Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0004 2.52014C14.5851 2.52014 16.6809 4.61592 16.6809 7.20061C16.6806 9.78509 14.5849 11.8811 12.0004 11.8811C9.41585 11.8811 7.32017 9.78509 7.31992 7.20061C7.31992 4.61592 9.4157 2.52014 12.0004 2.52014ZM12.0004 4.68108C10.6086 4.68108 9.48086 5.80885 9.48086 7.20061C9.48111 8.59215 10.6088 9.72014 12.0004 9.72014C13.392 9.72014 14.5197 8.59215 14.5199 7.20061C14.5199 5.80885 13.3921 4.68108 12.0004 4.68108Z"
        fill="black"
      />
    </svg>
  )
})

Iconhbmine.displayName = 'Iconhbmine'

export default Iconhbmine
