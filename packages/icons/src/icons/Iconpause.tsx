import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * pause
 * @source figma
 */
const Iconpause = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.25 4V20H6.75V4H5.25Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.25 4V20H18.75V4H17.25Z" fill={color} />
    </svg>
  );
});

Iconpause.displayName = 'Iconpause';

export default Iconpause;
