import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * contrast_multiple
 * @source figma
 */
const Iconcontrastmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.75 6.5H19C19.2761 6.5 19.5 6.72386 19.5 7L19.5 17C19.5 17.2761 19.2761 17.5 19 17.5L13.75 17.5V19L19 19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H13.75V6.5Z"
        fill={color}
      />
      <path
        d="M11.25 6.5L5 6.5C4.72386 6.5 4.5 6.72386 4.5 7L4.5 17C4.5 17.2761 4.72386 17.5 5 17.5L11.25 17.5V19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5L11.25 5V6.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 2.25C11.9142 2.25 12.25 2.58579 12.25 3V21C12.25 21.4142 11.9142 21.75 11.5 21.75C11.0858 21.75 10.75 21.4142 10.75 21V3C10.75 2.58579 11.0858 2.25 11.5 2.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconcontrastmultiple.displayName = 'Iconcontrastmultiple';

export default Iconcontrastmultiple;
