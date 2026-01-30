import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * iframe
 * @source figma
 */
const Iconiframe = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.8252 6.3252H16.1748V3H17.6748V6.3252H21V7.8252H17.6748V16.1748H21V17.6748H17.6748V21H16.1748V17.6748H7.8252V21H6.3252V17.6748H3V16.1748H6.3252V7.8252H3V6.3252H6.3252V3H7.8252V6.3252ZM7.8252 16.1748H16.1748V7.8252H7.8252V16.1748Z"
        fill="black"
      />
    </svg>
  );
});

Iconiframe.displayName = 'Iconiframe';

export default Iconiframe;
