import React from 'react'

export interface IconmagnifierProps extends React.SVGProps<SVGSVGElement> {}

/**
 * magnifier
 * @source figma
 */
export const Iconmagnifier = React.memo((props: IconmagnifierProps) => {
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
        d="M12.6001 2.84998C7.87813 2.84998 4.0504 6.67784 4.05029 11.3998C4.05029 13.4907 4.80191 15.4054 6.04834 16.891L3.06982 19.8695C2.77696 20.1624 2.77702 20.6372 3.06982 20.9301C3.36272 21.2229 3.83748 21.2229 4.13037 20.9301L7.10889 17.9515C8.59449 19.198 10.5091 19.9496 12.6001 19.9496C17.322 19.9495 21.1499 16.1217 21.1499 11.3998C21.1498 6.6779 17.322 2.85008 12.6001 2.84998ZM12.6001 4.34998C16.4936 4.35008 19.6498 7.50633 19.6499 11.3998C19.6499 15.2933 16.4936 18.4495 12.6001 18.4496C8.70649 18.4496 5.55029 15.2934 5.55029 11.3998C5.5504 7.50626 8.70656 4.34998 12.6001 4.34998Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmagnifier.displayName = 'Iconmagnifier'

export default Iconmagnifier
