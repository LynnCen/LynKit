import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * cloud_tag
 * @source figma
 */
const Iconcloudtag = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.74015 8.97056C6.74077 6.49666 9.16553 4.75 12 4.75C14.8345 4.75 17.2592 6.49666 18.2599 8.97057C20.4233 9.6193 22 11.6247 22 14C22 16.8995 19.6495 19.25 16.75 19.25H7.25C4.35051 19.25 2 16.8995 2 14C2 11.6247 3.57672 9.61929 5.74015 8.97056ZM12 6.25C9.68307 6.25 7.71485 7.75135 7.01885 9.83635L6.88309 10.243L6.46377 10.3324C4.77003 10.6934 3.5 12.1992 3.5 14C3.5 16.0711 5.17893 17.75 7.25 17.75H16.75C18.8211 17.75 20.5 16.0711 20.5 14C20.5 12.1992 19.23 10.6934 17.5362 10.3324L17.1169 10.243L16.9812 9.83636C16.2852 7.75135 14.3169 6.25 12 6.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconcloudtag.displayName = 'Iconcloudtag';

export default Iconcloudtag;
