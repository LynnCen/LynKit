import React from 'react'

export interface IconspinProps extends React.SVGProps<SVGSVGElement> {}

/**
 * spin
 * @source figma
 */
export const Iconspin = React.memo((props: IconspinProps) => {
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
        d="M15.8895 4.9121L12.0004 1.02301V3.99999C7.02985 3.99999 3 8.02942 3 13C3 17.6325 6.50005 21.4476 11 21.9451V20.4339C7.33064 19.945 4.5 16.8031 4.5 13C4.5 8.85785 7.85786 5.49999 12 5.49999L12.0004 8.80118L15.8895 4.9121Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4339 14C19.2576 15.323 18.7365 16.537 17.9638 17.5486L19.0323 18.6171C20.0678 17.3225 20.7532 15.7356 20.9451 14H19.4339Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 20.4339V21.9451C14.7361 21.7531 16.3234 21.0674 17.6182 20.0315L16.5497 18.9629C15.5379 19.7361 14.3235 20.2576 13 20.4339Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4339 12H20.9451C20.7541 10.2725 20.0742 8.69239 19.0469 7.40107L17.9477 8.43041C18.7292 9.44617 19.2564 10.6678 19.4339 12Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconspin.displayName = 'Iconspin'

export default Iconspin
