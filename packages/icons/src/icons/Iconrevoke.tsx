import React from 'react'

export interface IconrevokeProps extends React.SVGProps<SVGSVGElement> {}

/**
 * revoke
 * @source figma
 */
export const Iconrevoke = React.memo((props: IconrevokeProps) => {
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
        d="M8.58962 4.53447L5.83094 7.25018L14.5001 7.25018C17.9518 7.25018 20.75 10.0483 20.75 13.5001C20.75 16.9518 17.9518 19.75 14.5001 19.75H8.99761V18.25H14.5001C17.1234 18.25 19.25 16.1234 19.25 13.5001C19.25 10.8768 17.1234 8.75018 14.5001 8.75018L5.83094 8.75018L8.58962 11.4659L7.53732 12.5348L2.93091 8.00018L7.53732 3.46552L8.58962 4.53447Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconrevoke.displayName = 'Iconrevoke'

export default Iconrevoke
