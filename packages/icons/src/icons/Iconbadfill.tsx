import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * bad_fill
 * @source figma
 */
const Iconbadfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.6488 21.251C11.1198 21.2507 9.95211 19.9089 10.1361 18.4131L10.1586 18.2676L10.8109 14.6641H6.00134C4.28328 14.6638 3.00005 13.1118 3.29138 11.4453L3.32458 11.2842L4.76501 5.16992C5.11088 3.70243 6.42134 2.66406 7.92908 2.66406H16.1136C17.6321 2.66406 18.8631 3.89573 18.8636 5.41406V12.6445C18.8636 13.6232 18.5665 14.5792 18.0121 15.3857L14.7347 20.1523L14.6429 20.2783C14.1651 20.8893 13.4302 21.251 12.6488 21.251Z"
        fill="black"
      />
      <path
        d="M21.0863 13.915C20.6981 13.915 20.3788 13.6202 20.3402 13.2422L20.3363 13.165V4.66504C20.3363 4.25084 20.6721 3.91504 21.0863 3.91504C21.5005 3.91504 21.8363 4.25084 21.8363 4.66504V13.165C21.8363 13.5793 21.5005 13.915 21.0863 13.915Z"
        fill="black"
      />
    </svg>
  );
});

Iconbadfill.displayName = 'Iconbadfill';

export default Iconbadfill;
