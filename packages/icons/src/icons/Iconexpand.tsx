import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * expand
 * @source figma
 */
const Iconexpand = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M3 5.75H21V4.25H3V5.75Z" fill="black" />
      <path d="M11 12.75H21V11.25H11V12.75Z" fill="black" />
      <path d="M21 19.75H3V18.25H21V19.75Z" fill="black" />
      <path
        d="M7.5 12.866C8.16667 12.4811 8.16667 11.5189 7.5 11.134L4.5 9.40195C3.83333 9.01705 3 9.49817 3 10.268V13.7321C3 14.5019 3.83333 14.983 4.5 14.5981L7.5 12.866Z"
        fill="black"
      />
    </svg>
  );
});

Iconexpand.displayName = 'Iconexpand';

export default Iconexpand;
