import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * size
 * @source figma
 */
const Iconsize = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3.5 2.75C3.08579 2.75 2.75 3.08579 2.75 3.5V7.59238C2.75 8.00659 3.08579 8.34238 3.5 8.34238H4.25V15.25H3.50098C3.08676 15.25 2.75098 15.5858 2.75098 16V20.0927C2.75098 20.5069 3.08676 20.8427 3.50098 20.8427H7.59366C8.00788 20.8427 8.34366 20.5069 8.34366 20.0927V18.7505H15.6572V20.0931C15.6572 20.5074 15.993 20.8431 16.4072 20.8431H20.5004C20.9146 20.8431 21.2504 20.5074 21.2504 20.0931V16C21.2504 15.5858 20.9146 15.25 20.5004 15.25H16.4072C16.3762 15.25 16.3457 15.2519 16.3157 15.2555L8.34238 7.28223V3.5C8.34238 3.08579 8.00659 2.75 7.59238 2.75H3.5ZM7.28121 8.34238L15.6572 16.7184V17.2505H8.34366V16C8.34366 15.5858 8.00788 15.25 7.59366 15.25H5.75V8.34238H7.28121ZM4.25 6.84238V4.25H6.84238V6.84238H4.25ZM17.1572 19.3431V16.75H19.7504V19.3431H17.1572ZM4.25098 16.75H6.84366V19.3427H4.25098V16.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconsize.displayName = 'Iconsize';

export default Iconsize;
