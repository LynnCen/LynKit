import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * redo
 * @source figma
 */
const Iconredo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.4103 4.53445L18.1692 7.25078L9.49962 7.25078C6.04806 7.25078 3.25002 10.0488 3.25 13.5004C3.24999 16.9519 6.04804 19.75 9.49962 19.75H15V18.25H9.49962C6.87647 18.25 4.74999 16.1235 4.75 13.5004C4.75001 10.8772 6.87649 8.75078 9.49962 8.75078L18.1692 8.75078L15.4103 11.4671L16.4627 12.536L21.069 8.00078L16.4627 3.46558L15.4103 4.53445Z"
        fill={color}
      />
    </svg>
  );
});

Iconredo.displayName = 'Iconredo';

export default Iconredo;
