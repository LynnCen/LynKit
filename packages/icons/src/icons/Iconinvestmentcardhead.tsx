import React from 'react'

export interface IconinvestmentcardheadProps extends React.SVGProps<SVGSVGElement> {}

/**
 * Investment_card_head
 * @source figma
 */
export const Iconinvestmentcardhead = React.memo((props: IconinvestmentcardheadProps) => {
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
        d="M8.9502 10.7394C8.9502 9.05475 10.3159 7.68909 12.0005 7.68909C13.6851 7.68909 15.0508 9.05475 15.0508 10.7394C15.0508 11.5679 14.7204 12.3193 14.1843 12.869C15.1442 13.4188 15.8769 14.3198 16.2079 15.3964L14.7741 15.8372C14.4093 14.6507 13.3042 13.7897 11.9999 13.7897C10.6957 13.7897 9.59055 14.6507 9.22575 15.8372L7.79199 15.3964C8.12307 14.3196 8.85605 13.4184 9.81631 12.8686C9.28038 12.319 8.9502 11.5677 8.9502 10.7394ZM12.0005 9.18909C11.1443 9.18909 10.4502 9.88318 10.4502 10.7394C10.4502 11.5956 11.1443 12.2897 12.0005 12.2897C12.8567 12.2897 13.5508 11.5956 13.5508 10.7394C13.5508 9.88318 12.8567 9.18909 12.0005 9.18909Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 7C2.25 5.48122 3.48122 4.25 5 4.25H19C20.5188 4.25 21.75 5.48122 21.75 7V17C21.75 18.5188 20.5188 19.75 19 19.75H5C3.48122 19.75 2.25 18.5188 2.25 17V7ZM5 5.75C4.30964 5.75 3.75 6.30964 3.75 7V17C3.75 17.6904 4.30964 18.25 5 18.25H19C19.6904 18.25 20.25 17.6904 20.25 17V7C20.25 6.30964 19.6904 5.75 19 5.75H5Z"
        fill="black"
      />
    </svg>
  )
})

Iconinvestmentcardhead.displayName = 'Iconinvestmentcardhead'

export default Iconinvestmentcardhead
