import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * .copy_to
 * @source figma
 */
const Iconcopyto = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.4 9.5H10.6C9.99249 9.5 9.5 9.99249 9.5 10.6V19.4C9.5 20.0075 9.99249 20.5 10.6 20.5H19.4C20.0075 20.5 20.5 20.0075 20.5 19.4V10.6C20.5 9.99249 20.0075 9.5 19.4 9.5ZM10.6 8C9.16406 8 8 9.16406 8 10.6V19.4C8 20.8359 9.16406 22 10.6 22H19.4C20.8359 22 22 20.8359 22 19.4V10.6C22 9.16406 20.8359 8 19.4 8H10.6Z"
        fill={color}
      />
      <path
        d="M4.6 3.5H13.4C14.0075 3.5 14.5 3.99249 14.5 4.6V7H16V4.6C16 3.16406 14.8359 2 13.4 2H4.6C3.16406 2 2 3.16406 2 4.6V13.4C2 14.8359 3.16406 16 4.6 16H7V14.5H4.6C3.99249 14.5 3.5 14.0075 3.5 13.4V4.6C3.5 3.99249 3.99249 3.5 4.6 3.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconcopyto.displayName = 'Iconcopyto';

export default Iconcopyto;
