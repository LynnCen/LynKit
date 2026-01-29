import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * border_null_multiple
 * @source figma
 */
const Iconbordernullmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM12.75 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V11.25H12.75V4.5ZM12.75 12.75H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5H12.75V12.75ZM11.25 12.75V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19L4.5 12.75H11.25ZM11.25 11.25H4.5L4.5 5C4.5 4.72386 4.72386 4.5 5 4.5H11.25V11.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconbordernullmultiple.displayName = 'Iconbordernullmultiple';

export default Iconbordernullmultiple;
