import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * windows_minimode
 * @source figma
 */
const Iconwindowsminimode = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path
        d="M10.4999 3H4.3999V2H10.4999C12.4329 2 13.9999 3.567 13.9999 5.5V11.6H12.9999V5.5C12.9999 4.11929 11.8806 3 10.4999 3Z"
        fill={color}
      />
      <path
        d="M2 5.90002C2 5.0716 2.67157 4.40002 3.5 4.40002H10.1C10.9284 4.40002 11.6 5.0716 11.6 5.90002V12.5C11.6 13.3285 10.9284 14 10.1 14H3.5C2.67157 14 2 13.3285 2 12.5V5.90002ZM3.5 5.40002C3.22386 5.40002 3 5.62388 3 5.90002V12.5C3 12.7762 3.22386 13 3.5 13H10.1C10.3761 13 10.6 12.7762 10.6 12.5V5.90002C10.6 5.62388 10.3761 5.40002 10.1 5.40002H3.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconwindowsminimode.displayName = 'Iconwindowsminimode';

export default Iconwindowsminimode;
