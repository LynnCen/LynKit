import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * template_filter
 * @source figma
 */
const Icontemplatefilter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4 6.75L20 6.75V5.25H4V6.75ZM18 12.75H6V11.25H18V12.75ZM16 18.75H8V17.25H16V18.75Z"
        fill={color}
      />
    </svg>
  );
});

Icontemplatefilter.displayName = 'Icontemplatefilter';

export default Icontemplatefilter;
