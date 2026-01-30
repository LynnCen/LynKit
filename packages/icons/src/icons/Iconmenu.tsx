import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * menu
 * @source figma
 */
const Iconmenu = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4 6.75L20 6.75V5.25H4V6.75ZM20 12.75H4V11.25H20V12.75ZM20 18.75H4V17.25H20V18.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconmenu.displayName = 'Iconmenu';

export default Iconmenu;
