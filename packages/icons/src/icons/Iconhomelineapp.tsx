import React from 'react'

export interface IconhomelineappProps extends React.SVGProps<SVGSVGElement> {}

/**
 * home_line_app
 * @source figma
 */
export const Iconhomelineapp = React.memo((props: IconhomelineappProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M12.75 16.9997H11.25V11.9997H12.75V16.9997Z" fill="#4C535C" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6709 3.18132C11.4286 2.50792 12.5714 2.50792 13.3291 3.18132L20.3291 8.403C20.7559 8.78246 20.9999 9.32701 21 9.89812V18.9997C21 20.1042 20.1046 20.9997 19 20.9997H5C3.89543 20.9997 3 20.1042 3 18.9997V9.89812C3.00009 9.32701 3.24407 8.78246 3.6709 8.403L10.6709 3.18132ZM12.332 4.30241C12.1426 4.13419 11.8574 4.1342 11.668 4.30241L11.6201 4.34441L4.63672 9.55437C4.54934 9.64673 4.50008 9.7699 4.5 9.89812V18.9997C4.5 19.2758 4.72386 19.4997 5 19.4997H19C19.2761 19.4997 19.5 19.2758 19.5 18.9997V9.89812C19.4999 9.7699 19.4507 9.64673 19.3633 9.55437L12.3799 4.34441L12.332 4.30241Z"
        fill="#4C535C"
      />
    </svg>
  )
})

Iconhomelineapp.displayName = 'Iconhomelineapp'

export default Iconhomelineapp
