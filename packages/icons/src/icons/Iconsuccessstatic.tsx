import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * success_static
 * @source figma
 */
const Iconsuccessstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <circle cx="12" cy="12" r="10" fill="#0FBF77" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill="#18FFA7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7381 8.25L16.5832 8.97737L10.6023 16.1667L7.4165 12.2308L8.23404 11.4806L10.6023 13.6871L15.7381 8.25Z"
        fill="#222529"
      />
    </svg>
  );
});

Iconsuccessstatic.displayName = 'Iconsuccessstatic';

export default Iconsuccessstatic;
