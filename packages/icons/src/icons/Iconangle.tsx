import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * angle
 * @source figma
 */
const Iconangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.5 20.25C18.9142 20.25 19.25 19.9142 19.25 19.5C19.25 19.0858 18.9142 18.75 18.5 18.75H12.746C12.6167 14.6685 9.33149 11.3833 5.25 11.254V5.5C5.25 5.08579 4.91421 4.75 4.5 4.75C4.08579 4.75 3.75 5.08579 3.75 5.5V17.5C3.75 19.0188 4.98122 20.25 6.5 20.25H18.5ZM5.25 12.7549V17.5C5.25 18.1904 5.80964 18.75 6.5 18.75H11.2451C11.1171 15.497 8.50295 12.8829 5.25 12.7549Z"
        fill={color}
      />
    </svg>
  );
});

Iconangle.displayName = 'Iconangle';

export default Iconangle;
