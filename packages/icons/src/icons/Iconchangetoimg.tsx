import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * change_to_img
 * @source figma
 */
const Iconchangetoimg = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M1.46973 2.53033L5.1894 6.25H2.00006V7.75H7.75006V2H6.25006V5.18934L2.53039 1.46967L1.46973 2.53033Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0001 4.5H11.0001V3H19.0001C20.1046 3 21.0001 3.89543 21.0001 5V19C21.0001 20.1046 20.1046 21 19.0001 21H5.00006C3.89549 21 3.00006 20.1046 3.00006 19V11H4.50006V12.9394L8.47932 8.96012L12.8993 13.0401L15.9793 9.96012L19.5001 13.21V5C19.5001 4.72385 19.2762 4.5 19.0001 4.5ZM15.5088 15.4489L14.0024 14.0584L16.0209 12.0399L19.5001 15.2514V19C19.5001 19.2761 19.2762 19.5 19.0001 19.5H5.00006C4.72391 19.5 4.50006 19.2761 4.50006 19V15.0607L8.5209 11.0399L14.4914 16.5511L15.5088 15.4489Z"
        fill={color}
      />
    </svg>
  );
});

Iconchangetoimg.displayName = 'Iconchangetoimg';

export default Iconchangetoimg;
