import React from 'react'

export interface IconaiwriteProps extends React.SVGProps<SVGSVGElement> {}

/**
 * ai write
 * @source figma
 */
export const Iconaiwrite = React.memo((props: IconaiwriteProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M22 5.78094H2V4.28094H22V5.78094Z" fill="black" />
      <path d="M22 9.78094H2V8.28094H22V9.78094Z" fill="black" />
      <path d="M2 13.7809H14V12.2809H2V13.7809Z" fill="black" />
      <path
        d="M17.2773 15.1255C17.6896 15.043 18.0119 14.7207 18.0944 14.3083L18.387 12.8453C18.521 12.1754 19.4788 12.1754 19.6127 12.8453L19.9054 14.3083C19.9878 14.7207 20.3102 15.043 20.7225 15.1255L22.1856 15.4181C22.8555 15.5521 22.8555 16.5098 22.1856 16.6438L20.7225 16.9364C20.3102 17.0189 19.9878 17.3412 19.9054 17.7536L19.6127 19.2166C19.4788 19.8865 18.521 19.8865 18.387 19.2166L18.0944 17.7536C18.0119 17.3412 17.6896 17.0189 17.2773 16.9364L15.8142 16.6438C15.1443 16.5098 15.1443 15.5521 15.8142 15.4181L17.2773 15.1255Z"
        fill="black"
      />
      <path d="M2 17.7809H12V16.2809H2V17.7809Z" fill="black" />
    </svg>
  )
})

Iconaiwrite.displayName = 'Iconaiwrite'

export default Iconaiwrite
