import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * underline
 * @source figma
 */
const Iconunderline = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.5 5V11C7.5 13.4853 9.51472 15.5 12 15.5C14.4853 15.5 16.5 13.4853 16.5 11V5V4.5V3H18V4.5V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4.5V3H7.5V4.5V5ZM21 21V19.5H3V21H21Z"
        fill={color}
      />
    </svg>
  );
});

Iconunderline.displayName = 'Iconunderline';

export default Iconunderline;
