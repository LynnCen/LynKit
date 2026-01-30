import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * sticker_filled
 * @source figma
 */
const Iconstickerfilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.3135 17.4997C10.157 20.1111 12.6079 22 15.5001 22C19.09 22 22.0001 19.0899 22.0001 15.5C22.0001 12.2501 19.6151 9.55733 16.4999 9.07642V14.9997C16.4999 16.3804 15.3806 17.4997 13.9999 17.4997H9.3135Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5786 14.3157C1.97985 14.9543 2.43269 15.9996 3.30813 15.9996H13.9999C14.5522 15.9996 14.9999 15.5519 14.9999 14.9996V3.52838C14.9999 2.62184 13.8904 2.18309 13.2704 2.84444L2.5786 14.3157Z"
        fill={color}
      />
    </svg>
  );
});

Iconstickerfilled.displayName = 'Iconstickerfilled';

export default Iconstickerfilled;
