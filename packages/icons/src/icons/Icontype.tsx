import React from 'react'

export interface IcontypeProps extends React.SVGProps<SVGSVGElement> {}

/**
 * type
 * @source figma
 */
export const Icontype = React.memo((props: IcontypeProps) => {
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
        d="M9.5 7C9.5 5.61929 8.38071 4.5 7 4.5C5.61929 4.5 4.5 5.61929 4.5 7C4.5 8.38071 5.61929 9.5 7 9.5H9.5V7ZM3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7V9.5V11H9.5H7C4.79086 11 3 9.20914 3 7ZM17 9.5C18.3807 9.5 19.5 8.38071 19.5 7C19.5 5.61929 18.3807 4.5 17 4.5C15.6193 4.5 14.5 5.61929 14.5 7V9.5H17ZM13 7C13 4.79086 14.7909 3 17 3C19.2091 3 21 4.79086 21 7C21 9.20914 19.2091 11 17 11H14.5H13V9.5V7ZM9.5 14.5H7C5.61929 14.5 4.5 15.6193 4.5 17C4.5 18.3807 5.61929 19.5 7 19.5C8.38071 19.5 9.5 18.3807 9.5 17V14.5ZM7 13H9.5H11V14.5V17C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13ZM14.5 14.5V17C14.5 18.3807 15.6193 19.5 17 19.5C18.3807 19.5 19.5 18.3807 19.5 17C19.5 15.6193 18.3807 14.5 17 14.5H14.5ZM13 13H14.5H17C19.2091 13 21 14.7909 21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17V14.5V13Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontype.displayName = 'Icontype'

export default Icontype
