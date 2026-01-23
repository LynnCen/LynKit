import React from 'react'

export interface IconbrandfilledProps extends React.SVGProps<SVGSVGElement> {}

/**
 * brand_filled
 * @source figma
 */
export const Iconbrandfilled = React.memo((props: IconbrandfilledProps) => {
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
        d="M13.8069 11.238L13.8005 11.2438L13.7946 11.25C13.5721 11.4838 13.2342 11.5781 12.6946 11.5781H10.7055V8.95703H12.6946C13.2141 8.95703 13.5707 9.08574 13.8045 9.30541L13.8069 9.30754C14.039 9.52011 14.1687 9.82792 14.1687 10.2676C14.1687 10.7154 14.0382 11.0261 13.8069 11.238Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.7046 16.4165L13.7405 12.9025C14.2962 12.7705 14.7589 12.5168 15.1158 12.1326C15.5749 11.6471 15.7941 10.99 15.7941 10.2676C15.7941 9.75819 15.679 9.11293 15.4224 8.69094C15.1723 8.27951 14.8155 7.96367 14.3608 7.74315C13.9129 7.52205 13.3949 7.41602 12.8142 7.41602H9.08887V16.4165H10.7055V13.0023H11.8083L14.5501 16.4165H16.7046Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconbrandfilled.displayName = 'Iconbrandfilled'

export default Iconbrandfilled
