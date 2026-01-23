import React from 'react'

export interface IconvideotogetherProps extends React.SVGProps<SVGSVGElement> {}

/**
 * video_together
 * @source figma
 */
export const Iconvideotogether = React.memo((props: IconvideotogetherProps) => {
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
        d="M2.01514 6.31328C2.01514 5.78861 2.44046 5.36328 2.96514 5.36328H16.4934C17.0181 5.36328 17.4434 5.78861 17.4434 6.31328V9.05613L20.5935 7.42347C21.2258 7.09572 21.9806 7.55463 21.9806 8.26688L21.9809 16.3174C21.9809 17.0602 21.1668 17.5157 20.5338 17.1271L17.4437 15.23V17.6865C17.4437 18.2112 17.0184 18.6365 16.4937 18.6365H2.96514C2.44047 18.6365 2.01514 18.2112 2.01514 17.6865V6.31328ZM3.51514 6.86328V17.1365H15.9437V14.0682C15.9437 13.4036 16.672 12.9961 17.2384 13.3438L20.4808 15.3344L20.4807 9.17144L17.1846 10.8798C16.6188 11.1731 15.9434 10.7624 15.9434 10.1251V6.86328H3.51514Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconvideotogether.displayName = 'Iconvideotogether'

export default Iconvideotogether
