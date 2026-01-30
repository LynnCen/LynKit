import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * background_fill
 * @source figma
 */
const Iconbackgroundfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 13.7177V11.5963L11.5963 3H13.7177L3 13.7177ZM3.02963 19.3449C3.01015 19.2328 3 19.1176 3 19V17.2532L17.2532 3H19C19.1176 3 19.2328 3.01015 19.3449 3.02963L3.02963 19.3449ZM7.03136 21H5C4.97049 21 4.94114 20.9994 4.91194 20.9981L20.9981 4.91194C20.9994 4.94114 21 4.97049 21 5V7.03136L7.03136 21ZM12.6882 21H10.5669L21 10.5669V12.6882L12.6882 21ZM18.3451 21H16.2237L21 16.2237V18.3451L18.3451 21ZM8.0608 3L3 8.0608V5.93948L5.93948 3H8.0608Z"
        fill={color}
      />
    </svg>
  );
});

Iconbackgroundfill.displayName = 'Iconbackgroundfill';

export default Iconbackgroundfill;
