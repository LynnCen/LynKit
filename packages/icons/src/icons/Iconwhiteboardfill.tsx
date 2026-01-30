import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * whiteboard_fill
 * @source figma
 */
const Iconwhiteboardfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20.9986 10C20.9986 12.7837 19.3737 15.1879 17.0207 16.3158L12.2163 7.9944C11.4504 6.66773 9.53548 6.66773 8.76953 7.9944L7.06265 10.9508C7.02043 10.6399 6.99862 10.3225 6.99862 10C6.99862 6.13401 10.1326 3 13.9986 3C17.8646 3 20.9986 6.13401 20.9986 10Z"
        fill={color}
      />
      <path
        d="M10.6549 8.52647C10.766 8.56222 10.8664 8.63746 10.9327 8.7522L17.5683 20.2455C17.7608 20.5788 17.5202 20.9955 17.1353 20.9955H3.86403C3.47913 20.9955 3.23856 20.5788 3.43101 20.2455L7.6462 12.9445L7.64505 12.9421L10.0686 8.7444C10.1942 8.52677 10.4454 8.45413 10.6549 8.52647Z"
        fill={color}
      />
    </svg>
  );
});

Iconwhiteboardfill.displayName = 'Iconwhiteboardfill';

export default Iconwhiteboardfill;
