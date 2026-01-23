import React from 'react'

export interface IconsidebarhiddenProps extends React.SVGProps<SVGSVGElement> {}

/**
 * sidebar_hidden
 * @source figma
 */
export const Iconsidebarhidden = React.memo((props: IconsidebarhiddenProps) => {
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
        d="M14.7902 10.6537L13.744 11.6999H17.9011V13.1984H13.7992L14.7902 14.1893L13.7295 15.25L10.9011 12.4215L13.7295 9.59309L14.7902 10.6537Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.75C2 6.23122 3.23122 5 4.75 5H18.75C20.2688 5 21.5 6.23122 21.5 7.75V17.25C21.5 18.7688 20.2688 20 18.75 20H4.75C3.23122 20 2 18.7688 2 17.25L2 7.75ZM4.75 6.5C4.05964 6.5 3.5 7.05964 3.5 7.75V17.25C3.5 17.9404 4.05964 18.5 4.75 18.5H7.75V6.5H4.75ZM18.75 18.5H9.25V6.5H18.75C19.4404 6.5 20 7.05964 20 7.75V17.25C20 17.9404 19.4404 18.5 18.75 18.5Z"
        fill="black"
      />
    </svg>
  )
})

Iconsidebarhidden.displayName = 'Iconsidebarhidden'

export default Iconsidebarhidden
