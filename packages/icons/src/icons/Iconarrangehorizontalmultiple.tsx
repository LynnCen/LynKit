import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrange_horizontal_multiple
 * @source figma
 */
const Iconarrangehorizontalmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11 17.5L11 6.5L13 6.5L13 17.5L11 17.5Z"
        fill={color}
      />
      <path d="M4.75 21H3.25V3H4.75V21ZM20.75 21H19.25V3H20.75V21Z" fill={color} />
    </svg>
  );
});

Iconarrangehorizontalmultiple.displayName = 'Iconarrangehorizontalmultiple';

export default Iconarrangehorizontalmultiple;
