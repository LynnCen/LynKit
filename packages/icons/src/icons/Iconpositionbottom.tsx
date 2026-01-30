import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * position_bottom
 * @source figma
 */
const Iconpositionbottom = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20 21H4V19.5H20V21ZM12.75 15.1895L15.9697 11.9697L17.0303 13.0303L12 18.0605L6.96973 13.0303L8.03027 11.9697L11.25 15.1895V3H12.75V15.1895Z"
        fill={color}
      />
    </svg>
  );
});

Iconpositionbottom.displayName = 'Iconpositionbottom';

export default Iconpositionbottom;
