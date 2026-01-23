import React from 'react'

export interface IconhbsearchProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_search
 * @source figma
 */
export const Iconhbsearch = React.memo((props: IconhbsearchProps) => {
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
        d="M11.3994 2.59998C16.2595 2.59998 20.1991 6.53976 20.1992 11.3998C20.1992 13.4694 19.4818 15.3698 18.2861 16.8724L21.1064 19.6927L21.1748 19.7689C21.4951 20.1617 21.4725 20.7407 21.1064 21.1068C20.7403 21.4729 20.1613 21.4955 19.7686 21.1752L19.6924 21.1068L16.8721 18.2865C15.3694 19.4822 13.469 20.1996 11.3994 20.1996C6.5394 20.1995 2.59961 16.2598 2.59961 11.3998C2.59972 6.53983 6.53946 2.60008 11.3994 2.59998ZM11.3994 4.59998C7.64403 4.60008 4.59971 7.6444 4.59961 11.3998C4.59961 15.1553 7.64397 18.1995 11.3994 18.1996C15.155 18.1996 18.1992 15.1553 18.1992 11.3998C18.1991 7.64433 15.1549 4.59998 11.3994 4.59998Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconhbsearch.displayName = 'Iconhbsearch'

export default Iconhbsearch
