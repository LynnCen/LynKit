import React from 'react'

export interface IconphonenumProps extends React.SVGProps<SVGSVGElement> {}

/**
 * phone_num
 * @source figma
 */
export const Iconphonenum = React.memo((props: IconphonenumProps) => {
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
        d="M8.71137 16.4951C3.97169 12.5506 3.0536 7.52952 5.81669 4.38883C6.07132 4.09941 6.48747 4.01815 6.82675 4.20116C7.83358 4.74425 9.28666 5.90847 9.65463 7.96607C9.71066 8.27934 9.57512 8.58827 9.36022 8.823C8.80455 9.42992 8.19664 10.3725 8.19664 11.2705C8.19664 12.8211 10.7734 15.4466 12.5218 15.8857C13.8709 16.2245 14.8084 14.1301 15.8393 14.0919C16.7704 14.0574 18.5734 14.8637 20.011 17.0452C20.2865 17.4633 20.1598 18.0196 19.7418 18.2952C16.2814 20.5775 13.4925 20.4741 8.71137 16.4951Z"
        fill="black"
      />
    </svg>
  )
})

Iconphonenum.displayName = 'Iconphonenum'

export default Iconphonenum
