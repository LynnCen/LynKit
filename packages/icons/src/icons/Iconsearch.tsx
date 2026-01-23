import React from 'react'

export interface IconsearchProps extends React.SVGProps<SVGSVGElement> {}

/**
 * search
 * @source figma
 */
export const Iconsearch = React.memo((props: IconsearchProps) => {
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
        d="M11.4001 2.84998C6.67806 2.84998 2.8501 6.67794 2.8501 11.4C2.8501 16.122 6.67806 19.95 11.4001 19.95C13.491 19.95 15.4067 19.1994 16.8923 17.953L19.8696 20.9303C20.1625 21.2232 20.6373 21.2232 20.9302 20.9303C21.2231 20.6374 21.2231 20.1625 20.9302 19.8696L17.9529 16.8923C19.1995 15.4067 19.9501 13.491 19.9501 11.4C19.9501 6.67794 16.1221 2.84998 11.4001 2.84998ZM4.3501 11.4C4.3501 7.50637 7.50649 4.34998 11.4001 4.34998C15.2937 4.34998 18.4501 7.50637 18.4501 11.4C18.4501 15.2936 15.2937 18.45 11.4001 18.45C7.50649 18.45 4.3501 15.2936 4.3501 11.4Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsearch.displayName = 'Iconsearch'

export default Iconsearch
