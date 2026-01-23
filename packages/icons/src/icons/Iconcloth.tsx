import React from 'react'

export interface IconclothProps extends React.SVGProps<SVGSVGElement> {}

/**
 * cloth
 * @source figma
 */
export const Iconcloth = React.memo((props: IconclothProps) => {
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
        d="M6.71863 4.69866L2.04492 8.78809L4.67446 13.3898L6.25043 12.7515V19.9999H17.7504V12.7515L19.3264 13.3898L21.9559 8.78809L17.2822 4.69866H6.71863ZM10.2455 6.19865C10.3246 6.63734 10.4507 7.05429 10.6415 7.39302C10.9197 7.88671 11.3163 8.19865 12.0004 8.19865C12.6845 8.19865 13.0812 7.88671 13.3593 7.39302C13.5501 7.05429 13.6762 6.63734 13.7553 6.19865H10.2455ZM3.95596 9.10908L7.28223 6.19865H8.72605C8.8181 6.83457 8.99564 7.52756 9.33466 8.1293C9.83118 9.0106 10.6845 9.69865 12.0004 9.69864C13.3163 9.69864 14.1697 9.0106 14.6662 8.1293C15.0052 7.52756 15.1827 6.83457 15.2748 6.19865H16.7186L20.0449 9.10908L18.6744 11.5074L16.2504 10.5256V18.5H7.75043V10.5256L5.32641 11.5074L3.95596 9.10908Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcloth.displayName = 'Iconcloth'

export default Iconcloth
