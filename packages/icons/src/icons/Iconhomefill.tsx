import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * home_fill
 * @source figma
 */
const Iconhomefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 2L21 8V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8L12 2Z"
        fill={color}
      />
    </svg>
  );
});

Iconhomefill.displayName = 'Iconhomefill';

export default Iconhomefill;
