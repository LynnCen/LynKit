import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_repeat
 * @source figma
 */
const Iconarrowrepeat = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.9248 6.22168C20.5376 7.62397 21.5596 9.69295 21.5596 12C21.5596 16.2276 18.1319 19.6543 13.9043 19.6543H11.7666L13.7012 21.4502L12.6797 22.5498L9.34668 19.4541C9.12088 19.2443 9.04658 18.9178 9.15918 18.6309C9.2719 18.3438 9.54904 18.1543 9.85742 18.1543H13.9043C17.3035 18.1543 20.0596 15.3992 20.0596 12C20.0596 10.1453 19.2396 8.48307 17.9404 7.35352L18.9248 6.22168Z"
        fill="black"
      />
      <path
        d="M14.6533 4.5459C14.8791 4.75572 14.9534 5.08221 14.8408 5.36914C14.7281 5.6562 14.451 5.8457 14.1426 5.8457H10.0947C6.69578 5.84599 3.94043 8.601 3.94043 12C3.94043 13.855 4.76004 15.5179 6.05957 16.6475L5.56836 17.2139L5.07617 17.7793C3.46269 16.377 2.44043 14.3075 2.44043 12C2.44043 7.77257 5.86735 4.34599 10.0947 4.3457H12.2334L10.2988 2.5498L11.3193 1.4502L14.6533 4.5459Z"
        fill="black"
      />
    </svg>
  );
});

Iconarrowrepeat.displayName = 'Iconarrowrepeat';

export default Iconarrowrepeat;
