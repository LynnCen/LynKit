import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * img_loadfail_multiple
 * @source figma
 */
const Iconimgloadfailmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3H13V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V13.9391L7.96947 10.4696L8.47902 9.96008L9.00851 10.4489L12.8991 14.0402L15.4697 11.4696L15.9793 10.9601L16.5088 11.4489L19.5 14.21V11H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM19.5 16.2513L16.0208 13.0398L14.0022 15.0584L15.5085 16.4489L14.4911 17.5511L8.52059 12.0398L4.5 16.0604V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V16.2513Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6716 4.43932L20.9623 2.1486L22.023 3.20926L19.7323 5.49998L22.023 7.79072L20.9623 8.85138L18.6716 6.56064L16.3661 8.86612L15.3055 7.80546L17.6109 5.49998L15.3055 3.19452L16.3661 2.13386L18.6716 4.43932Z"
        fill={color}
      />
    </svg>
  );
});

Iconimgloadfailmultiple.displayName = 'Iconimgloadfailmultiple';

export default Iconimgloadfailmultiple;
