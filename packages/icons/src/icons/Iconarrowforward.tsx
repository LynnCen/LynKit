import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_forward
 * @source figma
 */
const Iconarrowforward = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.1893 11.2501L13.4697 5.53039L14.5303 4.46973L22.0607 12.0001L14.5303 19.5304L13.4697 18.4697L19.1893 12.7501H2V11.2501H19.1893Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowforward.displayName = 'Iconarrowforward';

export default Iconarrowforward;
