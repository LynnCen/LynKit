import React from 'react'

export interface IconhomeProps extends React.SVGProps<SVGSVGElement> {}

/**
 * home
 * @source figma
 */
export const Iconhome = React.memo((props: IconhomeProps) => {
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
        d="M11.25 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V9.97814C4.5 9.82384 4.57124 9.67819 4.69303 9.58346L3.77212 8.39943L4.69303 9.58346L11.693 4.13902C11.8736 3.99858 12.1264 3.99858 12.307 4.13901L19.307 9.58346C19.4288 9.67819 19.5 9.82384 19.5 9.97814V19C19.5 19.2761 19.2761 19.5 19 19.5H12.75V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V19.5ZM11.25 21H5C3.89543 21 3 20.1045 3 19V9.97814C3 9.36096 3.28494 8.77834 3.77212 8.39943L10.7721 2.95499C11.4943 2.39326 12.5057 2.39326 13.2279 2.95499L20.2279 8.39943C20.7151 8.77834 21 9.36095 21 9.97814V19C21 20.1045 20.1046 21 19 21H12.75H11.25Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconhome.displayName = 'Iconhome'

export default Iconhome
