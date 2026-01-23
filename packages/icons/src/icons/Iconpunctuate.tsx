import React from 'react'

export interface IconpunctuateProps extends React.SVGProps<SVGSVGElement> {}

/**
 * punctuate
 * @source figma
 */
export const Iconpunctuate = React.memo((props: IconpunctuateProps) => {
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
        d="M14.7916 4.64645L4.96879 14.4692C4.88363 14.5544 4.83207 14.6674 4.82359 14.7876L4.50136 19.3525C4.47995 19.6558 4.732 19.9078 5.03533 19.8864L9.60019 19.5642C9.72033 19.5557 9.83338 19.5041 9.91854 19.419L19.7413 9.59619C19.9366 9.40093 19.9366 9.08435 19.7413 8.88909L15.4987 4.64645C15.3034 4.45118 14.9868 4.45118 14.7916 4.64645ZM9.70581 21.0605C10.1864 21.0265 10.6385 20.8203 10.9792 20.4796L20.802 10.6569C21.583 9.8758 21.583 8.60947 20.802 7.82843L16.5594 3.58579C15.7783 2.80474 14.512 2.80474 13.7309 3.58579L3.90813 13.4086C3.56748 13.7492 3.36123 14.2014 3.32731 14.682L3.00508 19.2468C2.91944 20.4601 3.92763 21.4683 5.14095 21.3827L9.70581 21.0605Z"
        fill="black"
        fillOpacity={0.1}
      />
      <path
        d="M16.9839 10.9383L13.4483 7.40276L14.509 6.3421L18.0445 9.87764L16.9839 10.9383Z"
        fill="black"
        fillOpacity={0.1}
      />
    </svg>
  )
})

Iconpunctuate.displayName = 'Iconpunctuate'

export default Iconpunctuate
