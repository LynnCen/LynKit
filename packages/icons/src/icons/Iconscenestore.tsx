import React from 'react'

export interface IconscenestoreProps extends React.SVGProps<SVGSVGElement> {}

/**
 * scene_store
 * @source figma
 */
export const Iconscenestore = React.memo((props: IconscenestoreProps) => {
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
        d="M5.98465 3.53698C6.12683 3.35581 6.34437 3.25 6.57467 3.25H17.3225C17.5489 3.25 17.7632 3.35227 17.9056 3.52828L21.3331 7.76485C21.4411 7.89834 21.5 8.06486 21.5 8.23657V11C21.5 11.4142 21.1642 11.75 20.75 11.75H19.75V14.9328C19.7621 14.9864 19.7686 15.0421 19.7686 15.0994C19.7686 15.1566 19.7621 15.2123 19.75 15.2659V18.25H20C20.4142 18.25 20.75 18.5858 20.75 19C20.75 19.4142 20.4142 19.75 20 19.75H4C3.58579 19.75 3.25 19.4142 3.25 19C3.25 18.5858 3.58579 18.25 4 18.25H4.25V11.75H3.25C2.83579 11.75 2.5 11.4142 2.5 11V8.23657C2.5 8.06868 2.55634 7.90564 2.65999 7.77356L5.98465 3.53698ZM18.25 14.3494V11.75H12.75V14.3494H18.25ZM12.75 15.8494H18.25V18.25H12.75V15.8494ZM5.75 18.25H11.25V11.75H5.75V18.25ZM20 10.25H4V8.49572L6.93947 4.75H16.9646L20 8.50197V10.25Z"
        fill="black"
      />
    </svg>
  )
})

Iconscenestore.displayName = 'Iconscenestore'

export default Iconscenestore
