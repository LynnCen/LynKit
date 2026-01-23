import React from 'react'

export interface IconmergecellsProps extends React.SVGProps<SVGSVGElement> {}

/**
 * merge_cells
 * @source figma
 */
export const Iconmergecells = React.memo((props: IconmergecellsProps) => {
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
        d="M4.5 4H8.5C8.77614 4 9 4.22386 9 4.5V6.5H10.5V4.5C10.5 3.39543 9.60457 2.5 8.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H8.5C9.60457 21.5 10.5 20.6046 10.5 19.5V17.5H9V19.5C9 19.7761 8.77614 20 8.5 20H4.5C4.22386 20 4 19.7761 4 19.5V4.5C4 4.22386 4.22386 4 4.5 4ZM13.5 19.5V17.5H15V19.5C15 19.7761 15.2239 20 15.5 20H19.5C19.7761 20 20 19.7761 20 19.5V4.5C20 4.22386 19.7761 4 19.5 4H15.5C15.2239 4 15 4.22386 15 4.5V6.5H13.5V4.5C13.5 3.39543 14.3954 2.5 15.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H15.5C14.3954 21.5 13.5 20.6046 13.5 19.5ZM12.282 12L15.2063 14.9243L16.0548 14.0757L14.5791 12.6H18.8307V11.4H14.5791L16.0548 9.92426L15.2063 9.07573L12.282 12ZM7.9565 9.92426L9.43224 11.4H5.18066V12.6H9.43224L7.9565 14.0757L8.80503 14.9243L11.7293 12L8.80503 9.07573L7.9565 9.92426Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmergecells.displayName = 'Iconmergecells'

export default Iconmergecells
