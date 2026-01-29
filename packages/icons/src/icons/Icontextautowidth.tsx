import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_auto_width
 * @source figma
 */
const Icontextautowidth = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 4H6.5V20H5V4ZM17.5 4H19V13H17.5V4ZM12.75 4H11.25V20H12.75V4Z"
        fill={color}
      />
    </svg>
  );
});

Icontextautowidth.displayName = 'Icontextautowidth';

export default Icontextautowidth;
