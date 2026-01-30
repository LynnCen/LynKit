import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * anchorpoint_mirror_angle
 * @source figma
 */
const Iconanchorpointmirrorangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.72419 10.5853C6.04166 11.1521 5.49011 11.9794 5.06542 12.9804C4.24487 14.9146 4.01139 17.2764 4.24247 18.8939C4.30104 19.304 4.01612 19.6839 3.60607 19.7425C3.19602 19.801 2.81612 19.5161 2.75754 19.1061C2.48861 17.2236 2.75511 14.5854 3.68455 12.3946C4.18345 11.2186 4.90655 10.1068 5.88826 9.33129C6.09567 9.7963 6.37966 10.2196 6.72419 10.5853Z"
        fill={color}
      />
      <path
        d="M13.3404 10.5153C13.6802 10.1391 13.9573 9.70528 14.1554 9.2302C18.1917 10.8352 21.25 14.3197 21.25 19C21.25 19.4142 20.9142 19.75 20.5 19.75C20.0858 19.75 19.75 19.4142 19.75 19C19.75 14.9953 17.0448 11.8861 13.3404 10.5153Z"
        fill={color}
      />
      <path
        d="M7.04148 8C7.0142 7.8374 7 7.67036 7 7.5C7 7.32964 7.0142 7.1626 7.04148 7H2V8H7.04148Z"
        fill={color}
      />
      <path
        d="M12.9585 8H20V7H12.9585C12.9858 7.1626 13 7.32964 13 7.5C13 7.67036 12.9858 7.8374 12.9585 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7.5C7 9.15685 8.34315 10.5 10 10.5C11.6569 10.5 13 9.15685 13 7.5C13 5.84315 11.6569 4.5 10 4.5C8.34315 4.5 7 5.84315 7 7.5ZM10 9C9.17157 9 8.5 8.32843 8.5 7.5C8.5 6.67157 9.17157 6 10 6C10.8284 6 11.5 6.67157 11.5 7.5C11.5 8.32843 10.8284 9 10 9Z"
        fill={color}
      />
      <path
        d="M5 7C5 6.44772 4.55228 6 4 6H3C2.44772 6 2 6.44772 2 7V8C2 8.55228 2.44772 9 3 9H4C4.55228 9 5 8.55228 5 8V7Z"
        fill={color}
      />
      <path
        d="M22 7C22 6.44772 21.5523 6 21 6H20C19.4477 6 19 6.44772 19 7V8C19 8.55228 19.4477 9 20 9H21C21.5523 9 22 8.55228 22 8V7Z"
        fill={color}
      />
    </svg>
  );
});

Iconanchorpointmirrorangle.displayName = 'Iconanchorpointmirrorangle';

export default Iconanchorpointmirrorangle;
