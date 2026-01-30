import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * retract
 * @source figma
 */
const Iconretract = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4.94597 6.96624C5.25571 7.26429 5.74563 7.26429 6.05537 6.96624L7.96732 5.12646C8.48626 4.62712 8.13279 3.75 7.41263 3.75L3.58872 3.75C2.86855 3.75 2.51508 4.62711 3.03402 5.12646L4.94597 6.96624Z"
        fill="black"
      />
      <path d="M21.0004 5.74996H11.0004V4.24996H21.0004V5.74996Z" fill="black" />
      <path d="M21.0004 12.75H11.0004V11.25H21.0004V12.75Z" fill="black" />
      <path d="M11.0004 19.75H21.0004V18.25H11.0004V19.75Z" fill="black" />
      <path
        d="M6.05537 20.5505C5.74563 20.8485 5.25571 20.8485 4.94597 20.5505L3.03402 18.7107C2.51508 18.2113 2.86855 17.3342 3.58872 17.3342H7.41263C8.13279 17.3342 8.48626 18.2113 7.96732 18.7107L6.05537 20.5505Z"
        fill="black"
      />
    </svg>
  );
});

Iconretract.displayName = 'Iconretract';

export default Iconretract;
