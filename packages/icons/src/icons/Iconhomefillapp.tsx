import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * home_fill_app
 * @source figma
 */
const Iconhomefillapp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6709 3.18108C11.4287 2.50751 12.5713 2.50751 13.3291 3.18108L20.3291 8.40374C20.7558 8.78316 20.9999 9.32692 21 9.89788V19.0004C20.9999 20.1049 20.1045 21.0004 19 21.0004H5C3.8955 21.0004 3.00011 20.1049 3 19.0004V9.89788C3.00013 9.32692 3.24423 8.78316 3.6709 8.40374L10.6709 3.18108ZM11.25 12.0004V17.0004H12.75V12.0004H11.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconhomefillapp.displayName = 'Iconhomefillapp';

export default Iconhomefillapp;
