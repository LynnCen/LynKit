import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * align_vertical_left_multiple
 * @source figma
 */
const Iconalignverticalleftmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M8.75 14V16H15.75V14H8.75ZM8.75 8V10H21.75V8H8.75Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 21L4 3L5.5 3L5.5 21L4 21Z" fill={color} />
    </svg>
  );
});

Iconalignverticalleftmultiple.displayName = 'Iconalignverticalleftmultiple';

export default Iconalignverticalleftmultiple;
