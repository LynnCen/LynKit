import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * windows_maximize
 * @source figma
 */
const Iconwindowsmaximize = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 3C12.3284 3 13 3.67157 13 4.5V11.5C13 12.3284 12.3284 13 11.5 13H4.5C3.67157 13 3 12.3284 3 11.5V4.5C3 3.67157 3.67157 3 4.5 3H11.5ZM11.5 4C11.7761 4 12 4.22386 12 4.5V11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5V4.5C4 4.22386 4.22386 4 4.5 4H11.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconwindowsmaximize.displayName = 'Iconwindowsmaximize';

export default Iconwindowsmaximize;
