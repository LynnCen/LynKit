import React from 'react'

export interface IcontemplatesimilarfilledProps extends React.SVGProps<SVGSVGElement> {}

/**
 * template_similar_filled
 * @source figma
 */
export const Icontemplatesimilarfilled = React.memo((props: IcontemplatesimilarfilledProps) => {
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
        d="M14.2002 3C15.3047 3.0001 16.2002 3.8955 16.2002 5V19C16.2002 20.1045 15.3047 20.9999 14.2002 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14.2002ZM10.0098 6.56836C9.89185 5.97877 9.04956 5.97877 8.93164 6.56836L8.67383 7.85547C8.60127 8.21828 8.31784 8.50251 7.95508 8.5752L6.66699 8.83301C6.07756 8.95102 6.07755 9.79314 6.66699 9.91113L7.95508 10.1689C8.31769 10.2416 8.60113 10.5251 8.67383 10.8877L8.93164 12.1758C9.04958 12.7653 9.89179 12.7653 10.0098 12.1758L10.2676 10.8877C10.3403 10.525 10.6245 10.2415 10.9873 10.1689L12.2744 9.91113C12.864 9.79321 12.864 8.95093 12.2744 8.83301L10.9873 8.5752C10.6244 8.50261 10.3402 8.21839 10.2676 7.85547L10.0098 6.56836Z"
        fill="#222529"
      />
      <path
        d="M20.7803 6.46484C21.8681 6.65665 22.5941 7.69444 22.4023 8.78223L20.626 18.8594C20.434 19.947 19.3963 20.6732 18.3086 20.4814L17.4727 20.334C17.4909 20.2254 17.5 20.1137 17.5 20V5.88672L20.7803 6.46484Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontemplatesimilarfilled.displayName = 'Icontemplatesimilarfilled'

export default Icontemplatesimilarfilled
