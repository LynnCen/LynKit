import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * material_ai
 * @source figma
 */
const Iconmaterialai = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M3 5.75H21V4.25H3V5.75Z" fill={color} />
      <path d="M3 12.75H11V11.25H3V12.75Z" fill={color} />
      <path d="M11 19.75H3V18.25H11V19.75Z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.753 9.89822C18.5266 9.1543 17.4734 9.15428 17.247 9.89822L16.7745 11.451C16.3167 12.9557 15.2124 14.1784 13.7618 14.7866C13.1292 15.0518 13.1292 15.9482 13.7618 16.2134C15.2124 16.8216 16.3167 18.0443 16.7745 19.549L17.247 21.1018C17.4734 21.8457 18.5266 21.8457 18.753 21.1018L19.2255 19.549C19.6833 18.0443 20.7876 16.8216 22.2382 16.2134C22.8708 15.9482 22.8708 15.0518 22.2382 14.7866C20.7876 14.1784 19.6833 12.9557 19.2255 11.451L18.753 9.89822ZM15.5678 15.5C16.6507 14.7539 17.4989 13.7049 18 12.4773C18.5011 13.7049 19.3493 14.7539 20.4322 15.5C19.3493 16.2461 18.5011 17.2951 18 18.5227C17.4989 17.2951 16.6507 16.2461 15.5678 15.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconmaterialai.displayName = 'Iconmaterialai';

export default Iconmaterialai;
