import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * pic
 * @source figma
 */
const Iconpic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, color = 'currentColor', style, className, ...rest } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.83474 19.7498C1.89007 19.7498 1.2868 18.7422 1.73289 17.9095L8.39781 5.46832C8.86904 4.58869 10.1303 4.58868 10.6015 5.46832L13.0974 10.1273L14.3994 7.5233C14.8516 6.61878 16.1349 6.59776 16.6165 7.48697L22.2593 17.9044C22.7104 18.7373 22.1074 19.7498 21.1602 19.7498H2.83474ZM3.25229 18.2498L9.49966 6.58801L15.747 18.2498H3.25229ZM17.3907 18.2498H20.7404L15.5263 8.62359L13.9648 11.7465L17.2664 17.9095C17.326 18.0207 17.3669 18.1351 17.3907 18.2498Z"
        fill="black"
      />
    </svg>
  );
});

Iconpic.displayName = 'Iconpic';

export default Iconpic;
