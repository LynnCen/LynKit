import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_fullscreen
 * @source figma
 */
const Iconarrowfullscreen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.4009 13.6592L5.93115 19.1289H10.5581V20.6289H4.12061C3.92177 20.6288 3.73093 20.5498 3.59033 20.4092C3.4499 20.2686 3.37061 20.0777 3.37061 19.8789V13.5664H4.87061V18.0684L10.3403 12.5986L11.4009 13.6592Z"
        fill={color}
      />
      <path
        d="M19.8794 3.37109C20.0783 3.37109 20.269 3.45017 20.4097 3.59082C20.5502 3.73146 20.6294 3.92225 20.6294 4.12109V10.5674H19.1294V5.93164L13.6597 11.4014L12.5991 10.3408L18.0688 4.87109H13.5581V3.37109H19.8794Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowfullscreen.displayName = 'Iconarrowfullscreen';

export default Iconarrowfullscreen;
