import React from 'react'

export interface IconaddfolderstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * add_folder_static
 * @source figma
 */
export const Iconaddfolderstatic = React.memo((props: IconaddfolderstaticProps) => {
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
        d="M2 5C2 3.89543 2.89543 3 4 3H8.52786C8.83835 3 9.14458 3.07229 9.42229 3.21115L11.5777 4.28885C11.8554 4.42771 12.1616 4.5 12.4721 4.5H20C21.1046 4.5 22 5.39543 22 6.5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.25 19V6.5C21.25 5.80964 20.6904 5.25 20 5.25H12.4721C12.0452 5.25 11.6242 5.1506 11.2423 4.95967L9.08688 3.88197C8.91331 3.79518 8.72192 3.75 8.52786 3.75H4C3.30964 3.75 2.75 4.30964 2.75 5V19C2.75 19.6904 3.30964 20.25 4 20.25H20C20.6904 20.25 21.25 19.6904 21.25 19ZM4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V6.5C22 5.39543 21.1046 4.5 20 4.5H12.4721C12.1616 4.5 11.8554 4.42771 11.5777 4.28885L9.42229 3.21115C9.14458 3.07229 8.83835 3 8.52786 3H4ZM11.625 11.625V9H12.375V11.625H15V12.375H12.375V15H11.625V12.375H9V11.625H11.625Z"
        fill="black"
        fillOpacity={0.12}
      />
    </svg>
  )
})

Iconaddfolderstatic.displayName = 'Iconaddfolderstatic'

export default Iconaddfolderstatic
