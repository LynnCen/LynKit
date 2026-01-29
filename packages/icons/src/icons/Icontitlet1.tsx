import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * title_t1
 * @source figma
 */
const Icontitlet1 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M4 3V21H5.5V12.75H14V21H15.5V3H14V11.25H5.5V3H4Z" fill={color} />
      <path d="M18.5 13.5V21H20V13.5H18.5Z" fill={color} />
    </svg>
  );
});

Icontitlet1.displayName = 'Icontitlet1';

export default Icontitlet1;
