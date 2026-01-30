import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * sticky
 * @source figma
 */
const Iconsticky = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.869 3.92952L13.4697 2.53026L14.5304 1.4696L16.5304 3.4696L20.5304 7.4696L22.5304 9.4696L21.4697 10.5303L20.0705 9.13101L13.9986 16.9378L16.0304 18.9696L14.9697 20.0303L12.4697 17.5303L10.0001 15.0606L3.03039 22.0303L1.96973 20.9696L8.9394 13.9999L6.46973 11.5303L3.96973 9.03026L5.03039 7.9696L7.06222 10.0014L14.869 3.92952ZM15.9379 4.99843L8.13113 11.0704L10.5304 13.4696L12.9296 15.8689L19.0016 8.0621L15.9379 4.99843Z"
        fill={color}
      />
    </svg>
  );
});

Iconsticky.displayName = 'Iconsticky';

export default Iconsticky;
