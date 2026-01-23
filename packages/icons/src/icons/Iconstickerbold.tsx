import React from 'react'

export interface IconstickerboldProps extends React.SVGProps<SVGSVGElement> {}

/**
 * sticker_bold
 * @source figma
 */
export const Iconstickerbold = React.memo((props: IconstickerboldProps) => {
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
        d="M4.60765 14.4499L13.4501 4.85808V14.4499H4.60765ZM13.0811 2.60277C13.8526 1.76586 15.2501 2.31174 15.2501 3.45002V8.85461C15.3331 8.85154 15.4164 8.85 15.5001 8.85C19.1728 8.85 22.1501 11.8273 22.1501 15.5C22.1501 19.1727 19.1728 22.15 15.5001 22.15C12.081 22.15 9.26449 19.5696 8.89194 16.2499H3.35257C2.26326 16.2499 1.69518 14.9536 2.43351 14.1526L13.0811 2.60277ZM10.7077 16.2499C11.0682 18.5724 13.0766 20.35 15.5001 20.35C18.1787 20.35 20.3501 18.1786 20.3501 15.5C20.3501 12.8214 18.1787 10.65 15.5001 10.65C15.4163 10.65 15.3329 10.6521 15.2501 10.6563V14.9999C15.2501 15.6903 14.6905 16.2499 14.0001 16.2499H10.7077Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconstickerbold.displayName = 'Iconstickerbold'

export default Iconstickerbold
