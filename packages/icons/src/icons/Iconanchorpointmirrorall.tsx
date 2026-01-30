import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * anchorpoint_mirror_all
 * @source figma
 */
const Iconanchorpointmirrorall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.1011 9.35495C15.8901 9.82069 15.6021 10.2441 15.2534 10.609C17.8728 12.0607 19.75 15.2143 19.75 19C19.75 19.4142 20.0858 19.75 20.5 19.75C20.9142 19.75 21.25 19.4142 21.25 19C21.25 14.8376 19.1864 11.1287 16.1011 9.35495ZM8.74661 10.609C8.39786 10.2441 8.10987 9.82069 7.89888 9.35495C4.81357 11.1287 2.75 14.8376 2.75 19C2.75 19.4142 3.08579 19.75 3.5 19.75C3.91421 19.75 4.25 19.4142 4.25 19C4.25 15.2143 6.12718 12.0607 8.74661 10.609Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9585 8C14.9858 7.8374 15 7.67036 15 7.5C15 7.32964 14.9858 7.1626 14.9585 7H20V8H14.9585ZM9.04148 8H3V7H9.04148C9.0142 7.1626 9 7.32964 9 7.5C9 7.67036 9.0142 7.8374 9.04148 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7.5C15 9.15685 13.6569 10.5 12 10.5C10.3431 10.5 9 9.15685 9 7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z"
        fill={color}
      />
      <path
        d="M19 7C19 6.44772 19.4477 6 20 6H21C21.5523 6 22 6.44772 22 7V8C22 8.55228 21.5523 9 21 9H20C19.4477 9 19 8.55228 19 8V7Z"
        fill={color}
      />
      <path
        d="M2 7C2 6.44772 2.44772 6 3 6H4C4.55228 6 5 6.44772 5 7V8C5 8.55228 4.55228 9 4 9H3C2.44772 9 2 8.55228 2 8V7Z"
        fill={color}
      />
    </svg>
  );
});

Iconanchorpointmirrorall.displayName = 'Iconanchorpointmirrorall';

export default Iconanchorpointmirrorall;
