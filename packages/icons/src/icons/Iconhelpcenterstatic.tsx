import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * help_center_static
 * @source figma
 */
const Iconhelpcenterstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <foreignObject x="0" y="0" width="0" height="0">
        <div
          style={{
            backdropFilter: 'blur(11px)',
            clipPath: 'url(#bgblur_0_1660_613_clip_path)',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <circle cx="12" cy="12" r="12" fill="#2254F4" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0874 7.5C11.1011 7.5 10.3254 7.87305 9.77741 8.4515C9.24317 9.00365 9.0137 9.86969 9 10.7899H10.0959C10.0959 10.1458 10.2466 9.6462 10.5479 9.2781C10.8767 8.84426 11.3921 8.55009 12.0771 8.55009C12.6524 8.55009 13.0822 8.77853 13.411 9.09405C13.7123 9.38327 13.8767 9.79081 13.8767 10.3167C13.8767 10.6848 13.7397 11.0266 13.4795 11.3552C13.3425 11.513 13.0548 11.7891 12.589 12.1835C12.1644 12.5516 11.863 12.9065 11.6712 13.2483C11.4658 13.6164 11.3699 14.024 11.3699 14.4973V14.8193H12.4658V14.4973C12.4658 14.1423 12.5479 13.8136 12.726 13.5244C12.863 13.2878 13.0685 13.0511 13.3699 12.8145C13.9726 12.3018 14.3425 11.96 14.4932 11.8022C14.8219 11.3684 15 10.8557 15 10.2641C15 9.4753 14.6952 8.72757 14.1747 8.28059C13.6541 7.80732 12.9641 7.5 12.0874 7.5ZM11.9178 15.4356C11.6849 15.4356 11.4932 15.5013 11.3288 15.6591C11.1644 15.8037 11.0959 15.9877 11.0959 16.2112C11.0959 16.4347 11.1644 16.6188 11.3288 16.7765C11.4932 16.9211 11.6849 17 11.9178 17C12.1507 17 12.3562 16.9211 12.5205 16.7765C12.6712 16.6319 12.7534 16.4478 12.7534 16.2112C12.7534 15.9877 12.6712 15.8037 12.5205 15.6591C12.3562 15.5013 12.1507 15.4356 11.9178 15.4356Z"
        fill="white"
      />
      <defs>
        <clipPath id="bgblur_0_1660_613_clip_path" transform="translate(0 0)">
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
    </svg>
  );
});

Iconhelpcenterstatic.displayName = 'Iconhelpcenterstatic';

export default Iconhelpcenterstatic;
