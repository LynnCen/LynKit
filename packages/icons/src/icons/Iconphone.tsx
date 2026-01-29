import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * phone
 * @source figma
 */
const Iconphone = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.5 2C5.67157 2 5 2.67157 5 3.5V20.5C5 21.3284 5.67157 22 6.5 22H17.5C18.3284 22 19 21.3284 19 20.5V3.5C19 2.67157 18.3284 2 17.5 2H6.5ZM6.5 3.5L17.5 3.5V20.5H6.5V3.5ZM12 19C12.4142 19 12.75 18.6642 12.75 18.25C12.75 17.8358 12.4142 17.5 12 17.5C11.5858 17.5 11.25 17.8358 11.25 18.25C11.25 18.6642 11.5858 19 12 19Z"
        fill={color}
      />
    </svg>
  );
});

Iconphone.displayName = 'Iconphone';

export default Iconphone;
