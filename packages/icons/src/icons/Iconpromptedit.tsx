import React from 'react'

export interface IconprompteditProps extends React.SVGProps<SVGSVGElement> {}

/**
 * prompt_edit
 * @source figma
 */
export const Iconpromptedit = React.memo((props: IconprompteditProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M15 4.72498H2.00586V3.22498H15V4.72498Z" fill="#222529" />
      <path d="M15 9.6438H2.00586V8.1438H15V9.6438Z" fill="#222529" />
      <path d="M2.00586 14.5627H10.4492V13.0627H2.00586V14.5627Z" fill="#222529" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1609 10.9935L10.4277 16.7518C10.0847 17.0963 9.83046 17.5191 9.68678 17.9838L8.84355 20.7111C8.60552 21.481 9.32709 22.2025 10.0952 21.9628L12.8149 21.1138C13.2795 20.9688 13.7018 20.7126 14.0454 20.3675L21.6697 12.7096C21.7282 12.6509 21.7728 12.5798 21.8001 12.5015C22.4734 10.5764 20.9251 8.68805 19.0207 8.81693C18.8258 8.83001 18.6271 8.86424 18.4267 8.92173L18.2823 8.96315C18.1892 8.98984 18.1045 9.03989 18.0361 9.10855L16.1602 10.9928L16.1609 10.9935ZM17.2215 12.0541L11.4888 17.812C11.3174 17.9843 11.1902 18.1957 11.1184 18.428L10.5562 20.2464L12.369 19.6805C12.6013 19.608 12.8125 19.4799 12.9843 19.3073L18.7169 13.5495L17.2215 12.0541Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconpromptedit.displayName = 'Iconpromptedit'

export default Iconpromptedit
