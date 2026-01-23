import React from 'react'

export interface IcontagnewdarkstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tag_new_dark_static
 * @source figma
 */
export const Icontagnewdarkstatic = React.memo((props: IcontagnewdarkstaticProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      {...props}
    >
      <rect width="20" height="10" rx="5" fill="#F54531" />
      <path
        d="M3.31706 7.07892H4.26044L4.53484 3.76959H4.57258L5.80758 7.07892H7.12202L7.48269 2.72916H6.5456L6.28783 5.83792H6.2501L5.13683 2.72916H3.67773L3.31706 7.07892Z"
        fill="white"
      />
      <path
        d="M11.2118 5.07355C11.2857 4.18298 11.0613 3.5551 9.85266 3.5551C8.76617 3.5551 8.10373 3.94592 7.98738 5.34904C7.87104 6.75217 8.46867 7.14299 9.52945 7.14299C10.1338 7.14299 10.6646 7.02126 10.8804 6.89953L10.941 6.16914C10.7059 6.29087 10.1943 6.4126 9.77002 6.4126C9.15284 6.4126 8.88213 6.18836 8.89089 5.69502L11.1399 5.55407C11.1671 5.45796 11.1954 5.27216 11.2118 5.07355ZM8.94455 5.04792C9.00899 4.50333 9.22258 4.25345 9.79476 4.25345C10.3412 4.25345 10.4057 4.56099 10.3744 4.939L8.94455 5.04792Z"
        fill="white"
      />
      <path
        d="M12.3181 7.07892H13.4882L14.2564 4.71476H14.2949L14.6711 7.07892H15.8411L17.0795 3.61917H16.1023L15.3487 6.11788H15.3101L14.9065 3.61917H13.8522L13.0342 6.11788H12.9957L12.6564 3.61917H11.6663L12.3181 7.07892Z"
        fill="white"
      />
    </svg>
  )
})

Icontagnewdarkstatic.displayName = 'Icontagnewdarkstatic'

export default Icontagnewdarkstatic
