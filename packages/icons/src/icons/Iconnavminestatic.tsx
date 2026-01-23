import React from 'react'

export interface IconnavminestaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * nav_mine_static
 * @source figma
 */
export const Iconnavminestatic = React.memo((props: IconnavminestaticProps) => {
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
        d="M11.5545 1.50982C17.3481 1.26455 22.2445 5.76212 22.49 11.5557C22.7353 17.3492 18.2366 22.2456 12.4432 22.4913C6.64972 22.7365 1.75427 18.2378 1.50859 12.4444C1.26337 6.65086 5.76094 1.75539 11.5545 1.50982Z"
        fill="#222529"
      />
      <path
        d="M8.5293 15.3977L15.1006 15.9358C16.4551 16.0467 17.447 17.2591 17.2881 18.6087L17.2822 18.6565C16.0307 19.6513 14.4903 20.3041 12.7959 20.4622L12.3594 20.4915C9.80475 20.5997 7.46753 19.567 5.83496 17.8479L6.01367 17.1751C6.31148 16.052 7.37124 15.303 8.5293 15.3977Z"
        fill="#EDEDED"
      />
      <path
        d="M13.0332 7.45144C14.688 7.38167 16.0867 8.66681 16.1572 10.3216C16.2252 11.9252 15.0208 13.2885 13.4404 13.4358L13.2871 13.4456C11.632 13.5155 10.2322 12.2307 10.1621 10.5755C10.1045 9.20565 10.9761 8.00977 12.2178 7.59988L12.4141 7.54324C12.6123 7.49261 12.8197 7.46052 13.0332 7.45144Z"
        fill="#EDEDED"
      />
    </svg>
  )
})

Iconnavminestatic.displayName = 'Iconnavminestatic'

export default Iconnavminestatic
