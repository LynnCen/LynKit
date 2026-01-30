import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * upload_image_bold
 * @source figma
 */
const Iconuploadimagebold = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.5 3C19.1569 3 20.5 4.34315 20.5 6V12H18.5V6C18.5 5.44772 18.0523 5 17.5 5H5.5C4.94772 5 4.5 5.44772 4.5 6V11C10.0228 11 14.5 15.4772 14.5 21H5.5C3.84315 21 2.5 19.6569 2.5 18V6C2.5 4.34315 3.84315 3 5.5 3H17.5ZM19.5 14C20.0523 14 20.5 14.4477 20.5 15V16.5H22C22.5522 16.5 22.9998 16.9479 23 17.5C23 18.0523 22.5523 18.5 22 18.5H20.5V20C20.5 20.5523 20.0523 21 19.5 21C18.9477 21 18.5 20.5523 18.5 20V18.5H17C16.4477 18.5 16 18.0523 16 17.5C16.0002 16.9479 16.4478 16.5 17 16.5H18.5V15C18.5 14.4477 18.9477 14 19.5 14ZM4.5 18C4.5 18.5523 4.94772 19 5.5 19H12.248C11.36 15.5495 8.22769 13 4.5 13V18ZM14 8C14.8284 8 15.5 8.67157 15.5 9.5C15.5 10.3284 14.8284 11 14 11C13.1716 11 12.5 10.3284 12.5 9.5C12.5 8.67157 13.1716 8 14 8Z"
        fill={color}
      />
    </svg>
  );
});

Iconuploadimagebold.displayName = 'Iconuploadimagebold';

export default Iconuploadimagebold;
