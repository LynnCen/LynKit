import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * warning_static
 * @source figma
 */
const Iconwarningstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <circle cx="12" cy="12" r="10" fill="#DA8505" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill="#FFD18C"
      />
      <path d="M11.1667 13.25L10.75 7.83337H13.25L12.8333 13.25H11.1667Z" fill="#222529" />
      <path d="M11.1667 14.5V16.1667H12.8333V14.5H11.1667Z" fill="#222529" />
    </svg>
  );
});

Iconwarningstatic.displayName = 'Iconwarningstatic';

export default Iconwarningstatic;
