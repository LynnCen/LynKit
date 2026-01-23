import React from 'react'

export interface IconautolayoutverticalcenterProps extends React.SVGProps<SVGSVGElement> {}

/**
 * autolayout_vertical_center
 * @source figma
 */
export const Iconautolayoutverticalcenter = React.memo(
  (props: IconautolayoutverticalcenterProps) => {
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
          d="M5 10.75C4.44772 10.75 4 11.1977 4 11.75L4 12.25C4 12.8023 4.44772 13.25 5 13.25L19 13.25C19.5523 13.25 20 12.8023 20 12.25L20 11.75C20 11.1977 19.5523 10.75 19 10.75L5 10.75ZM7 4.5C6.44772 4.5 6 4.94772 6 5.5L6 6C6 6.55228 6.44772 7 7 7L17 7C17.5523 7 18 6.55228 18 6L18 5.5C18 4.94771 17.5523 4.5 17 4.5L7 4.5ZM8 18C8 17.4477 8.44772 17 9 17L15 17C15.5523 17 16 17.4477 16 18L16 18.5C16 19.0523 15.5523 19.5 15 19.5L9 19.5C8.44772 19.5 8 19.0523 8 18.5L8 18Z"
          fill="#222529"
        />
      </svg>
    )
  }
)

Iconautolayoutverticalcenter.displayName = 'Iconautolayoutverticalcenter'

export default Iconautolayoutverticalcenter
