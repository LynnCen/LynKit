import React from 'react'

export interface IcontableinsertaheadProps extends React.SVGProps<SVGSVGElement> {}

/**
 * table_insert_ahead
 * @source figma
 */
export const Icontableinsertahead = React.memo((props: IcontableinsertaheadProps) => {
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
        d="M4 15.5L4 19.5C4 19.7761 4.22386 20 4.5 20L19.5 20C19.7761 20 20 19.7761 20 19.5L20 15.5C20 15.2239 19.7761 15 19.5 15L4.5 15C4.22386 15 4 15.2239 4 15.5ZM4.5 13.5C3.39543 13.5 2.5 14.3954 2.5 15.5L2.5 19.5C2.5 20.6046 3.39543 21.5 4.5 21.5L19.5 21.5C20.6046 21.5 21.5 20.6046 21.5 19.5L21.5 15.5C21.5 14.3954 20.6046 13.5 19.5 13.5L4.5 13.5ZM7.75 7.5L11.25 7.5L11.25 11L12.75 11L12.75 7.5L16.25 7.5L16.25 6L12.75 6L12.75 2.5L11.25 2.5L11.25 6L7.75 6L7.75 7.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontableinsertahead.displayName = 'Icontableinsertahead'

export default Icontableinsertahead
