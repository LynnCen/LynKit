import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_hexagon
 * @source figma
 */
const Iconshapehexagon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.9999 2L17.1431 5.85864L22.4022 9.5577L20.3218 15.6416L18.4289 21.7863L11.9999 21.6877L5.57098 21.7863L3.67811 15.6415L1.59766 9.5577L6.85677 5.85864L11.9999 2ZM11.9999 3.87522L7.73855 7.07231L3.3811 10.1372L5.10487 15.178L6.6732 20.2692L11.9999 20.1875L17.3267 20.2692L18.895 15.178L20.6188 10.1372L16.2613 7.07231L11.9999 3.87522Z"
        fill={color}
      />
    </svg>
  );
});

Iconshapehexagon.displayName = 'Iconshapehexagon';

export default Iconshapehexagon;
