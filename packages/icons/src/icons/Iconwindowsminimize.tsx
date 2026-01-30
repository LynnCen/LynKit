import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * windows_minimize
 * @source figma
 */
const Iconwindowsminimize = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, color = 'currentColor', style, className, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <rect x="2.5" y="7.5" width="11" height="1" rx="0.5" fill={color} />
    </svg>
  );
});

Iconwindowsminimize.displayName = 'Iconwindowsminimize';

export default Iconwindowsminimize;
