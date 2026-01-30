import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * numbered_list
 * @source figma
 */
const Iconnumberedlist = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M10 6.5H21V5H10V6.5Z" fill={color} />
      <path d="M21 18.9831L10 19L9.99718 17.5L20.9972 17.4831L21 18.9831Z" fill={color} />
      <path d="M9.99991 12.7159H21V11.2159H9.99991V12.7159Z" fill={color} />
      <path d="M4.25 10V3H5.75V10H4.25Z" fill={color} />
      <path
        d="M3 15H5.45V15.8987L3.05 17.8987V21H7V19.5H4.55V18.6013L6.95 16.6013V13.5H3V15Z"
        fill={color}
      />
    </svg>
  );
});

Iconnumberedlist.displayName = 'Iconnumberedlist';

export default Iconnumberedlist;
