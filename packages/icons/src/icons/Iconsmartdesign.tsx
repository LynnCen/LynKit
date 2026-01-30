import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * smart_design
 * @source figma
 */
const Iconsmartdesign = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.9492 9.88864L9.8273 8.76673C7.78695 6.72639 4.39002 7.06275 2.78944 9.46362C1.7655 10.9995 1.7655 13.0005 2.78944 14.5364C4.38235 16.9258 7.75445 17.2703 9.79788 15.2624L15.2331 9.82739C16.6041 8.45637 18.8867 8.68239 19.9622 10.2957C20.6503 11.3277 20.6503 12.6723 19.9622 13.7043C18.8867 15.3176 16.6041 15.5436 15.2331 14.1726L14.1211 13.0606L13.0604 14.1212L14.1725 15.2333C16.2128 17.2736 19.6097 16.9373 21.2103 14.5364C22.2343 13.0005 22.2343 10.9995 21.2103 9.46362C19.6778 7.16477 16.4983 6.75871 14.4397 8.51947L8.88354 14.0756L8.87358 14.0657L8.76663 14.1726C7.39561 15.5436 5.11303 15.3176 4.03752 13.7043C3.34947 12.6723 3.34947 11.3277 4.03752 10.2957C5.11303 8.68239 7.39562 8.45637 8.76664 9.82739L9.88854 10.9493L10.9492 9.88864Z"
        fill="black"
      />
    </svg>
  );
});

Iconsmartdesign.displayName = 'Iconsmartdesign';

export default Iconsmartdesign;
