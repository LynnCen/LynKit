import React from 'react'

export interface IconfolderdamstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * folder_dam_static
 * @source figma
 */
export const Iconfolderdamstatic = React.memo((props: IconfolderdamstaticProps) => {
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
        d="M21 19.5V10.5H3V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5Z"
        fill="#F6F7F9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 9.75H21.75V19.5C21.75 20.3284 21.0784 21 20.25 21H3.75C2.92157 21 2.25 20.3284 2.25 19.5V9.75ZM3.75 11.25V19.5L20.25 19.5V11.25H3.75Z"
        fill="#7F8792"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 4.5C2.25 3.67157 2.92157 3 3.75 3H10.7202C11.2129 3 11.6742 3.24198 11.9543 3.64735L12.8025 4.875L20.25 4.875C21.0784 4.875 21.75 5.54657 21.75 6.375V9.75C21.75 10.5784 21.0784 11.25 20.25 11.25H3.75C2.92157 11.25 2.25 10.5784 2.25 9.75V4.5ZM10.7202 4.5H3.75V9.75H20.25L20.25 6.375H12.8025C12.3098 6.375 11.8485 6.13302 11.5684 5.72765L10.7202 4.5Z"
        fill="#7F8792"
      />
    </svg>
  )
})

Iconfolderdamstatic.displayName = 'Iconfolderdamstatic'

export default Iconfolderdamstatic
