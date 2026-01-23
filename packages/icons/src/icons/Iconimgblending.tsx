import React from 'react'

export interface IconimgblendingProps extends React.SVGProps<SVGSVGElement> {}

/**
 * img_blending
 * @source figma
 */
export const Iconimgblending = React.memo((props: IconimgblendingProps) => {
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
        d="M7.7832 10.0068C10.6892 10.1542 13 12.5574 13 15.5L12.9932 15.7832C12.8458 18.6892 10.4426 21 7.5 21L7.2168 20.9932C4.40463 20.8505 2.14946 18.5954 2.00684 15.7832L2 15.5C2 12.4624 4.46243 10 7.5 10L7.7832 10.0068ZM19 3C20.1046 3 21 3.89543 21 5V18C21 19.0357 20.2128 19.887 19.2041 19.9893L19 20H13.5C13.8467 19.5385 14.1401 19.0353 14.374 18.5H19C19.2761 18.5 19.5 18.2761 19.5 18V9.20996L14.8232 13.8857C14.7019 13.3328 14.5211 12.8026 14.2852 12.3027L19.5 7.08887V5C19.5 4.72386 19.2761 4.5 19 4.5H16.5986L11.7656 9.33203C11.3391 9.03647 10.881 8.78313 10.3965 8.58008L14.4775 4.5H6C5.72386 4.5 5.5 4.72386 5.5 5V8.27148C4.97462 8.41653 4.47237 8.61647 4 8.86621V5C4 3.89543 4.89543 3 6 3H19ZM7.5 11.5C5.29086 11.5 3.5 13.2909 3.5 15.5C3.5 17.7091 5.29086 19.5 7.5 19.5C9.70914 19.5 11.5 17.7091 11.5 15.5C11.5 13.2909 9.70914 11.5 7.5 11.5Z"
        fill="black"
      />
    </svg>
  )
})

Iconimgblending.displayName = 'Iconimgblending'

export default Iconimgblending
