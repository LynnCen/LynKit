import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text2video
 * @source figma
 */
const Icontext2video = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.8447 15.0741C16.8447 14.3378 17.661 13.8947 18.2783 14.2958L22.4893 17.0331C23.0518 17.399 23.0517 18.2227 22.4893 18.5887L18.2783 21.326C17.661 21.7273 16.8449 21.2849 16.8447 20.5487V15.0741Z"
        fill={color}
      />
      <path
        d="M19 2.99986C20.1045 2.9999 20.9999 3.8954 21 4.99986V13.5907L19.5 12.6151V4.99986C19.4999 4.72379 19.2761 4.49987 19 4.49986C14.3334 4.49968 9.66669 4.49978 5 4.49986C4.75833 4.49987 4.55633 4.67137 4.50977 4.89927L4.5 4.99986V18.9999C4.50002 19.276 4.72388 19.4998 5 19.4999H14.9434V20.9999H5C3.89546 20.9998 3.00003 20.1044 3 18.9999V4.99986C3.00007 3.96428 3.78728 3.11287 4.7959 3.0106L5 2.99986C9.66667 2.99978 14.3333 2.99968 19 2.99986Z"
        fill={color}
      />
      <path d="M16 9.12974H12.75V16.369H11.25V9.12974H8V7.62974H16V9.12974Z" fill={color} />
    </svg>
  );
});

Icontext2video.displayName = 'Icontext2video';

export default Icontext2video;
