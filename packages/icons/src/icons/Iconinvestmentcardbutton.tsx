import React from 'react'

export interface IconinvestmentcardbuttonProps extends React.SVGProps<SVGSVGElement> {}

/**
 * Investment_card_button
 * @source figma
 */
export const Iconinvestmentcardbutton = React.memo((props: IconinvestmentcardbuttonProps) => {
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
        d="M4.8 6.2511C3.39167 6.2511 2.25 7.39277 2.25 8.8011V16.2C2.25 17.6084 3.39167 18.75 4.8 18.75H19.2C20.6083 18.75 21.75 17.6084 21.75 16.2V8.8011C21.75 7.39277 20.6083 6.2511 19.2 6.2511H4.8ZM20.25 8.8011C20.25 8.2212 19.7799 7.7511 19.2 7.7511H4.8C4.2201 7.7511 3.75 8.2212 3.75 8.8011V13C3.75 13.6904 4.30964 14.25 5 14.25H19C19.6904 14.25 20.25 13.6904 20.25 13V8.8011ZM20.25 15.4501C19.875 15.6419 19.4501 15.75 19 15.75H5C4.54989 15.75 4.12503 15.6419 3.75 15.4501V16.2C3.75 16.7799 4.2201 17.25 4.8 17.25H19.2C19.7799 17.25 20.25 16.7799 20.25 16.2V15.4501Z"
        fill="black"
      />
    </svg>
  )
})

Iconinvestmentcardbutton.displayName = 'Iconinvestmentcardbutton'

export default Iconinvestmentcardbutton
