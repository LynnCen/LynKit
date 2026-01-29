import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * xiansuibianjiaogemingzi
 * @source figma
 */
const Iconxiansuibianjiaogemingzi = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <rect x="9" y="11" width="4" height="4" fill="black" fillOpacity={0.6} />
      <rect x="13" y="3" width="8" height="8" fill="black" fillOpacity={0.8} />
    </svg>
  );
});

Iconxiansuibianjiaogemingzi.displayName = 'Iconxiansuibianjiaogemingzi';

export default Iconxiansuibianjiaogemingzi;
