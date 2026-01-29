import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * bottom
 * @source figma
 */
const Iconbottom = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.9697 16.2803L14.0303 15.2197L16.5 17.6893V4.5H18V17.6893L20.4697 15.2197L21.5303 16.2803L17.25 20.5607L12.9697 16.2803Z"
        fill={color}
      />
      <path d="M3 6.75H10.5V5.25H3V6.75Z" fill={color} />
      <path d="M10.5 18.75H3V17.25H10.5V18.75Z" fill={color} />
      <path d="M3 12.75H10.5V11.25H3V12.75Z" fill={color} />
    </svg>
  );
});

Iconbottom.displayName = 'Iconbottom';

export default Iconbottom;
