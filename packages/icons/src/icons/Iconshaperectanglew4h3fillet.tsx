import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_rectangle_w4_h3_fillet
 * @source figma
 */
const Iconshaperectanglew4h3fillet = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2 9.5C2 6.73858 4.23858 4.5 7 4.5H17C19.7614 4.5 22 6.73858 22 9.5V14.5C22 17.2614 19.7614 19.5 17 19.5H7C4.23858 19.5 2 17.2614 2 14.5V9.5ZM17 6C18.933 6 20.5 7.567 20.5 9.5V14.5C20.5 16.433 18.933 18 17 18H7C5.067 18 3.5 16.433 3.5 14.5V9.5C3.5 7.567 5.067 6 7 6H17Z"
        fill={color}
      />
    </svg>
  );
});

Iconshaperectanglew4h3fillet.displayName = 'Iconshaperectanglew4h3fillet';

export default Iconshaperectanglew4h3fillet;
