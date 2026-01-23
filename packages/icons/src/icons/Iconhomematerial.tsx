import React from 'react'

export interface IconhomematerialProps extends React.SVGProps<SVGSVGElement> {}

/**
 * home_material
 * @source figma
 */
export const Iconhomematerial = React.memo((props: IconhomematerialProps) => {
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
        d="M17.5 4.25H11V2.75H17.5C19.5711 2.75 21.25 4.42893 21.25 6.5V14H19.75V6.5C19.75 5.25736 18.7426 4.25 17.5 4.25ZM5 6.5H17.0001C17.2762 6.5 17.5001 6.72386 17.5001 7V13.8084L15.0643 11.56L14.5348 11.0712L14.0253 11.5807L11.797 13.809L8.3976 10.6711L7.8681 10.1823L7.35856 10.6919L4.5 13.5504V7C4.5 6.72386 4.72386 6.5 5 6.5ZM12.9001 14.8272L14.1754 16.0044L13.158 17.1066L7.90968 12.2621L4.5 15.6717V19.0001C4.5 19.2762 4.72386 19.5001 5 19.5001H17.0001C17.2762 19.5001 17.5001 19.2762 17.5001 19.0001V15.8497L14.5764 13.1509L12.9001 14.8272ZM3 7C3 5.89543 3.89543 5 5 5H17.0001C18.1046 5 19.0001 5.89543 19.0001 7V19.0001C19.0001 20.1046 18.1046 21.0001 17.0001 21.0001H5C3.89543 21.0001 3 20.1046 3 19.0001V7Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconhomematerial.displayName = 'Iconhomematerial'

export default Iconhomematerial
