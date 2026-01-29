import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_color
 * @source figma
 */
const Icontextcolor = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20.696 21H17.9699L16.1221 16.75H7.87859L6.03076 21H3.30469L11.1308 3H12.8699L20.696 21ZM8.96554 14.25L12.0003 7.26997L15.0351 14.25H8.96554Z"
        fill={color}
      />
    </svg>
  );
});

Icontextcolor.displayName = 'Icontextcolor';

export default Icontextcolor;
