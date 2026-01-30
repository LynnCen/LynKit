import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * check_circle_fill
 * @source figma
 */
const Iconcheckcirclefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.261 8.09753L10.5782 13.7801L7.73866 10.9377L6.32373 12.3512L10.5774 16.6092L17.6752 9.51178L16.261 8.09753Z"
        fill={color}
      />
    </svg>
  );
});

Iconcheckcirclefill.displayName = 'Iconcheckcirclefill';

export default Iconcheckcirclefill;
