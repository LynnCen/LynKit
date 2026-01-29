import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * show
 * @source figma
 */
const Iconshow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.9996 6C7.10379 6 2.97234 9.27285 1.67383 13.75H3.24698C4.49298 10.1139 7.94106 7.5 11.9996 7.5C16.0582 7.5 19.5063 10.1139 20.7523 13.75H22.3255C21.027 9.27285 16.8955 6 11.9996 6Z"
        fill={color}
      />
      <path
        d="M11.9999 16.5C13.6567 16.5 14.9999 15.1569 14.9999 13.5C14.9999 11.8431 13.6567 10.5 11.9999 10.5C10.343 10.5 8.99988 11.8431 8.99988 13.5C8.99988 15.1569 10.343 16.5 11.9999 16.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconshow.displayName = 'Iconshow';

export default Iconshow;
