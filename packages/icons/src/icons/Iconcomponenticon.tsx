import React from 'react'

export interface IconcomponenticonProps extends React.SVGProps<SVGSVGElement> {}

/**
 * component_icon
 * @source figma
 */
export const Iconcomponenticon = React.memo((props: IconcomponenticonProps) => {
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
        d="M11.5057 2.91504C11.7285 2.79166 11.9987 2.78979 12.2232 2.91007L20.4704 7.32853C20.7141 7.45909 20.8662 7.71315 20.8662 7.98962V16.5511C20.8662 16.8263 20.7155 17.0794 20.4735 17.2105L12.2263 21.6786C12.0002 21.8012 11.727 21.7993 11.5026 21.6736L3.52322 17.2055C3.28635 17.0728 3.13965 16.8226 3.13965 16.5511V7.98962C3.13965 7.71687 3.28772 7.46563 3.52633 7.3335L11.5057 2.91504ZM11.875 4.42519L5.54316 7.93133L11.8742 10.875L18.4185 7.93094L11.875 4.42519ZM19.3662 9.14942L12.6191 12.1847V19.7599L19.3662 16.1044V9.14942ZM11.1191 19.7397V12.1781L4.63965 9.16545V16.1115L11.1191 19.7397Z"
        fill="black"
      />
    </svg>
  )
})

Iconcomponenticon.displayName = 'Iconcomponenticon'

export default Iconcomponenticon
