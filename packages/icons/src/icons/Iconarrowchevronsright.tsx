import React from 'react'

export interface IconarrowchevronsrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_chevrons_right
 * @source figma
 */
export const Iconarrowchevronsright = React.memo((props: IconarrowchevronsrightProps) => {
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
        d="M18.0153 12.5151L18.5457 11.9848L18.0153 11.4545L13.5153 6.95447L12.4547 8.01513L16.4243 11.9848L12.4547 15.9545L13.5153 17.0151L18.0153 12.5151ZM12.0153 12.5151L12.5457 11.9848L12.0153 11.4545L7.51532 6.95447L6.45466 8.01513L10.4243 11.9848L6.45466 15.9545L7.51532 17.0151L12.0153 12.5151Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowchevronsright.displayName = 'Iconarrowchevronsright'

export default Iconarrowchevronsright
