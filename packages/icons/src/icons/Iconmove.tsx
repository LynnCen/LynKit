import React from 'react'

export interface IconmoveProps extends React.SVGProps<SVGSVGElement> {}

/**
 * move
 * @source figma
 */
export const Iconmove = React.memo((props: IconmoveProps) => {
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
        d="M13.4865 13.7473C13.537 13.6302 13.6304 13.5369 13.7474 13.4864L21.2531 10.2471C21.6747 10.0651 21.6487 9.45885 21.2131 9.31366L4.31279 3.68021C3.92191 3.54992 3.55004 3.92179 3.68033 4.31266L9.31378 21.213C9.45897 21.6486 10.0653 21.6746 10.2472 21.253L13.4865 13.7473ZM12.1093 13.1529L9.90823 18.2529L5.73581 5.73569L18.2531 9.90811L13.1531 12.1092C12.6848 12.3113 12.3114 12.6847 12.1093 13.1529Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmove.displayName = 'Iconmove'

export default Iconmove
