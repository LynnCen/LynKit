import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * single_good
 * @source figma
 */
const Iconsinglegood = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.1289 8.54395C11.5069 8.58257 11.8018 8.90187 11.8018 9.29004V14.7041C11.8018 15.1183 11.466 15.4541 11.0518 15.4541H5.6377C5.22348 15.4541 4.8877 15.1183 4.8877 14.7041V9.29004L4.8916 9.21289C4.93022 8.83492 5.24953 8.54004 5.6377 8.54004H11.0518L11.1289 8.54395ZM6.3877 13.9541H10.3018V10.04H6.3877V13.9541Z"
        fill="black"
      />
      <path d="M16.9873 14.7041H12.9873V12.7041H16.9873V14.7041Z" fill="black" />
      <path d="M18.9873 11.2959H12.9873V9.2959H18.9873V11.2959Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 5.25C20.9664 5.25 21.7498 6.03367 21.75 7V16.999C21.75 17.9655 20.9665 18.749 20 18.749H4C3.09374 18.749 2.34818 18.0604 2.25879 17.1777L2.25 16.999V7C2.2502 6.03367 3.03362 5.25 4 5.25H20ZM4 6.75C3.86205 6.75 3.7502 6.8621 3.75 7V16.999L3.75488 17.0498C3.77824 17.1637 3.87923 17.249 4 17.249H20C20.1381 17.249 20.25 17.1371 20.25 16.999V7C20.2498 6.8621 20.1379 6.75 20 6.75H4Z"
        fill="black"
      />
    </svg>
  );
});

Iconsinglegood.displayName = 'Iconsinglegood';

export default Iconsinglegood;
