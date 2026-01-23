import React from 'react'

export interface IcontableinsertleftProps extends React.SVGProps<SVGSVGElement> {}

/**
 * table_insert_left
 * @source figma
 */
export const Icontableinsertleft = React.memo((props: IcontableinsertleftProps) => {
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
        d="M15.5 4H19.5C19.7761 4 20 4.22386 20 4.5V19.5C20 19.7761 19.7761 20 19.5 20H15.5C15.2239 20 15 19.7761 15 19.5V4.5C15 4.22386 15.2239 4 15.5 4ZM13.5 4.5C13.5 3.39543 14.3954 2.5 15.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H15.5C14.3954 21.5 13.5 20.6046 13.5 19.5V4.5ZM7.5 7.75V11.25H11V12.75H7.5V16.25H6V12.75H2.5V11.25H6V7.75H7.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontableinsertleft.displayName = 'Icontableinsertleft'

export default Icontableinsertleft
