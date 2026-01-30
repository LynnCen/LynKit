import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * quit
 * @source figma
 */
const Iconquit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6 2.25C4.48122 2.25 3.25 3.48122 3.25 5V19C3.25 20.5188 4.48122 21.75 6 21.75H11V20.25H6C5.30964 20.25 4.75 19.6904 4.75 19V5C4.75 4.30964 5.30964 3.75 6 3.75H11V2.25H6Z"
        fill="black"
      />
      <path
        d="M16.773 7.46976L21.5457 12.2429L16.773 17.0157L15.7123 15.955L18.9173 12.75H9V11.25H18.4317L15.7123 8.53037L16.773 7.46976Z"
        fill="black"
      />
    </svg>
  );
});

Iconquit.displayName = 'Iconquit';

export default Iconquit;
