import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * title_t2
 * @source figma
 */
const Icontitlet2 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path
        d="M19.45 15H17V13.5H20.95V16.6013L18.55 18.6013V19.5H21V21H17.05V17.8987L19.45 15.8987V15Z"
        fill={color}
      />
    </svg>
  );
});

Icontitlet2.displayName = 'Icontitlet2';

export default Icontitlet2;
