import React from 'react'

export interface IconfiltertypeProps extends React.SVGProps<SVGSVGElement> {}

/**
 * filter_type
 * @source figma
 */
export const Iconfiltertype = React.memo((props: IconfiltertypeProps) => {
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
        d="M3.42035 5.61896C3.42035 3.82403 4.87542 2.36896 6.67035 2.36896H18.3388C19.5814 2.36896 20.5888 3.37632 20.5888 4.61896L20.5891 19.3283C20.5891 20.5419 19.6283 21.5311 18.4258 21.5767C18.397 21.5778 18.3681 21.5783 18.3391 21.5783C18.339 21.5783 18.3393 21.5783 18.3391 21.5783H6.67035C4.87542 21.5783 3.42035 20.1232 3.42035 18.3283V5.61896ZM6.83408 20.0783C5.77715 20.0783 4.92035 19.2215 4.92035 18.1646C4.92035 17.1077 5.77715 16.2509 6.83408 16.2509H19.0888V19.3283C19.0888 19.7425 18.753 20.0783 18.3388 20.0783H6.83408ZM19.0888 14.7509V4.61896C19.0888 4.20474 18.753 3.86896 18.3388 3.86896H9.46371V14.7509H19.0888ZM7.96371 14.7509H6.83408C6.12487 14.7509 5.46618 14.9671 4.92035 15.3373V5.61896C4.92035 4.65246 5.70385 3.86896 6.67035 3.86896H7.96371V14.7509Z"
        fill="black"
      />
    </svg>
  )
})

Iconfiltertype.displayName = 'Iconfiltertype'

export default Iconfiltertype
