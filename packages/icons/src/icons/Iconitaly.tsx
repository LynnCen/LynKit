import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * italy
 * @source figma
 */
const Iconitaly = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.5 3H18.5V4.5H14.6481L10.8981 19.5H14.5V21H5.5V19.5H9.35192L13.1019 4.5H9.5V3Z"
        fill={color}
      />
    </svg>
  );
});

Iconitaly.displayName = 'Iconitaly';

export default Iconitaly;
