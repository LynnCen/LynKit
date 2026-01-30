import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * index
 * @source figma
 */
const Iconindex = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M8.5 4.86792L8.5 19.839H10.5L10.5 4.86792H8.5Z" fill="black" />
      <path d="M13.5 7.83899L13.5 19.839H15.5L15.5 7.83899H13.5Z" fill="black" />
      <path d="M18.5 19.839V12.839H20.5V19.839H18.5Z" fill="black" />
      <path d="M3.5 14.2629L3.5 19.839H5.5L5.5 14.2629H3.5Z" fill="black" />
    </svg>
  );
});

Iconindex.displayName = 'Iconindex';

export default Iconindex;
