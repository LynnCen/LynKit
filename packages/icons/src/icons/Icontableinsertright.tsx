import React from 'react'

export interface IcontableinsertrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * table_insert_right
 * @source figma
 */
export const Icontableinsertright = React.memo((props: IcontableinsertrightProps) => {
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
        d="M8.5 4H4.5C4.22386 4 4 4.22386 4 4.5V19.5C4 19.7761 4.22386 20 4.5 20H8.5C8.77614 20 9 19.7761 9 19.5V4.5C9 4.22386 8.77614 4 8.5 4ZM10.5 4.5C10.5 3.39543 9.60457 2.5 8.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H8.5C9.60457 21.5 10.5 20.6046 10.5 19.5V4.5ZM16.5 7.75V11.25H13V12.75H16.5V16.25H18V12.75H21.5V11.25H18V7.75H16.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontableinsertright.displayName = 'Icontableinsertright'

export default Icontableinsertright
