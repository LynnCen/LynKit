import React from 'react'

export interface IconshapearrowfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shape_arrow_fill
 * @source figma
 */
export const Iconshapearrowfill = React.memo((props: IconshapearrowfillProps) => {
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
        d="M20.052 3.34539L12.1717 5.31545C11.7213 5.42804 11.6541 6.04014 12.0693 6.24774L15.1533 7.78972L3.86041 19.0826C3.56752 19.3755 3.56752 19.8504 3.86041 20.1433C4.1533 20.4362 4.62818 20.4362 4.92107 20.1433L16.214 8.85038L17.7559 11.9343C17.9635 12.3495 18.5756 12.2823 18.6882 11.832L20.6583 3.95172C20.7498 3.58553 20.4181 3.25384 20.052 3.34539Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconshapearrowfill.displayName = 'Iconshapearrowfill'

export default Iconshapearrowfill
