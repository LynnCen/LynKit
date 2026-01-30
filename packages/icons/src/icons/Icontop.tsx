import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * top
 * @source figma
 */
const Icontop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.9697 7.71966L14.0303 8.78032L16.5 6.31065V19.5H18V6.31065L20.4697 8.78032L21.5303 7.71966L17.25 3.43933L12.9697 7.71966Z"
        fill={color}
      />
      <path d="M3 6.74999H10.5V5.24999H3V6.74999Z" fill={color} />
      <path d="M10.5 18.75H3V17.25H10.5V18.75Z" fill={color} />
      <path d="M3 12.75H10.5V11.25H3V12.75Z" fill={color} />
    </svg>
  );
});

Icontop.displayName = 'Icontop';

export default Icontop;
