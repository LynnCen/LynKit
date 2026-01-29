import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_frame_on_static
 * @source figma
 */
const Iconaiframeonstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.666 1.66699C18.7706 1.66699 19.666 2.56242 19.666 3.66699V12.667H16.8105L14.6865 10.7061L12.7256 12.667H10.3936L7.18652 9.70605L3.16602 13.7275V17.667C3.16621 17.943 3.39 18.167 3.66602 18.167H6V19.667H3.66602C2.56157 19.667 1.66621 18.7714 1.66602 17.667V3.66699C1.66602 2.56242 2.56145 1.66699 3.66602 1.66699H17.666ZM3.66602 3.16699C3.38987 3.16699 3.16602 3.39085 3.16602 3.66699V11.6064L7.14551 7.62695L11.5654 11.707L14.6455 8.62695L18.166 11.877V3.66699C18.166 3.39085 17.9422 3.16699 17.666 3.16699H3.66602Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3545 13.9805C21.569 13.9805 23.3642 15.7757 23.3643 17.9902C23.3643 20.2048 21.569 21.9999 19.3545 22H11.334C9.11944 21.9999 7.32422 20.2048 7.32422 17.9902C7.32428 15.7757 9.11948 13.9805 11.334 13.9805H19.3545ZM19.3555 14.9824C17.6946 14.9824 16.3477 16.3293 16.3477 17.9902C16.3479 19.6509 17.6947 20.9971 19.3555 20.9971C21.016 20.9968 22.362 19.6507 22.3623 17.9902C22.3623 16.3295 21.0161 14.9827 19.3555 14.9824Z"
        fill="#1CCC66"
      />
    </svg>
  );
});

Iconaiframeonstatic.displayName = 'Iconaiframeonstatic';

export default Iconaiframeonstatic;
