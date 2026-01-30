import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * autolayout_vertical_left
 * @source figma
 */
const Iconautolayoutverticalleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4.75 4.5C4.19772 4.5 3.75 4.94772 3.75 5.5L3.75 6C3.75 6.55228 4.19772 7 4.75 7L14.75 7C15.3023 7 15.75 6.55228 15.75 6L15.75 5.5C15.75 4.94771 15.3023 4.5 14.75 4.5L4.75 4.5ZM4.75 10.75C4.19772 10.75 3.75 11.1977 3.75 11.75L3.75 12.25C3.75 12.8023 4.19772 13.25 4.75 13.25L18.75 13.25C19.3023 13.25 19.75 12.8023 19.75 12.25L19.75 11.75C19.75 11.1977 19.3023 10.75 18.75 10.75L4.75 10.75ZM3.75 18C3.75 17.4477 4.19772 17 4.75 17L10.75 17C11.3023 17 11.75 17.4477 11.75 18L11.75 18.5C11.75 19.0523 11.3023 19.5 10.75 19.5L4.75 19.5C4.19772 19.5 3.75 19.0523 3.75 18.5L3.75 18Z"
        fill={color}
      />
    </svg>
  );
});

Iconautolayoutverticalleft.displayName = 'Iconautolayoutverticalleft';

export default Iconautolayoutverticalleft;
