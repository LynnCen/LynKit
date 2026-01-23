import React from 'react'

export interface IcontaggroupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tag_group
 * @source figma
 */
export const Icontaggroup = React.memo((props: IcontaggroupProps) => {
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
        d="M3.5 12C3.5 8.96243 5.96243 6.5 9 6.5C12.0376 6.5 14.5 8.96243 14.5 12C14.5 15.0376 12.0376 17.5 9 17.5C5.96243 17.5 3.5 15.0376 3.5 12ZM9 5C5.13401 5 2 8.13401 2 12C2 15.866 5.13401 19 9 19C12.866 19 16 15.866 16 12C16 8.13401 12.866 5 9 5ZM14.8406 19C14.4084 19 13.9853 18.9608 13.5748 18.8859C14.2246 18.5005 14.8152 18.0257 15.3296 17.4786C18.1381 17.2311 20.3406 14.8728 20.3406 12C20.3406 9.12724 18.1381 6.7689 15.3296 6.52145C14.8152 5.97427 14.2246 5.49952 13.5748 5.11415C13.9853 5.03917 14.4084 5 14.8406 5C18.7066 5 21.8406 8.13401 21.8406 12C21.8406 15.866 18.7066 19 14.8406 19Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontaggroup.displayName = 'Icontaggroup'

export default Icontaggroup
