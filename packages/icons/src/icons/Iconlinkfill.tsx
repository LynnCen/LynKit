import React from 'react'

export interface IconlinkfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * link_fill
 * @source figma
 */
export const Iconlinkfill = React.memo((props: IconlinkfillProps) => {
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
        d="M13.262 11.9999C13.262 12.7188 12.665 13.3015 11.9287 13.3015C11.1923 13.3015 10.5953 12.7188 10.5953 11.9999C10.5953 11.2811 11.1923 10.6984 11.9287 10.6984C12.665 10.6984 13.262 11.2811 13.262 11.9999Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.32826 16.9954L8.64214 11.1188C9.04952 10.0841 9.86209 9.26097 10.8914 8.84023L16.9721 6.35453C17.2325 6.2481 17.5298 6.37288 17.6362 6.63322C17.6874 6.75835 17.6867 6.89867 17.6343 7.02328L15.1149 13.0164C14.6989 14.0059 13.9092 14.7913 12.9174 15.2019L6.99688 17.6525C6.737 17.7601 6.43913 17.6366 6.33156 17.3768C6.28111 17.2549 6.27992 17.1182 6.32826 16.9954Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlinkfill.displayName = 'Iconlinkfill'

export default Iconlinkfill
