import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * mosaic_fill
 * @source figma
 */
const Iconmosaicfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
        fill={color}
      />
      <path d="M9.6 18V14.5H6V18H9.6Z" fill={color} />
      <path d="M9.6 9.5V6H6V9.5H9.6Z" fill={color} />
      <path d="M13.8002 13.75V10.25H10.2002V13.75H13.8002Z" fill={color} />
      <path d="M18 18V14.5H14.4V18H18Z" fill={color} />
    </svg>
  );
});

Iconmosaicfill.displayName = 'Iconmosaicfill';

export default Iconmosaicfill;
