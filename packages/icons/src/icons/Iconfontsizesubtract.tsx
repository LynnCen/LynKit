import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * font_size_subtract
 * @source figma
 */
const Iconfontsizesubtract = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.41613 4.5L2 19.5H3.59479L5.30989 14.75H10.8393L12.4225 19.5H14.0036L9.00408 4.5H7.41613ZM10.3393 13.25L8.18517 6.78688L5.85151 13.25H10.3393ZM21.5 11.5H19H17.5H14V13H17.5H19H21.5V11.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconfontsizesubtract.displayName = 'Iconfontsizesubtract';

export default Iconfontsizesubtract;
