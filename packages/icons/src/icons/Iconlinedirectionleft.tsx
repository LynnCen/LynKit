import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_direction_left
 * @source figma
 */
const Iconlinedirectionleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.9395 7C7.23239 6.70711 7.70727 6.70711 8.00016 7C8.29305 7.2929 8.29305 7.76777 8.00016 8.06066L4.81082 11.25H21.2502C21.6644 11.25 22.0002 11.5858 22.0002 12C22.0002 12.4142 21.6644 12.75 21.2502 12.75H4.81082L8.00016 15.9393C8.29305 16.2322 8.29305 16.7071 8.00016 17C7.70727 17.2929 7.23239 17.2929 6.9395 17L2.25283 12.3133C2.07978 12.1403 2.07978 11.8597 2.25283 11.6867L6.9395 7Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinedirectionleft.displayName = 'Iconlinedirectionleft';

export default Iconlinedirectionleft;
