import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * scene_design
 * @source figma
 */
const Iconscenedesign = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.37717 4.48685L5.55408 2.39258L4.73099 4.48685L2.63672 5.30994L4.73099 6.13303L5.55408 8.22729L6.37717 6.13303L8.47144 5.30994L6.37717 4.48685Z"
        fill="black"
      />
      <path
        d="M4.24365 12.7598L3.02954 12.009L3.40757 13.3855L2.6568 14.5996L4.03332 14.2216L5.24743 14.9723L4.86939 13.5958L5.62017 12.3817L4.24365 12.7598Z"
        fill="black"
      />
      <path
        d="M11.2172 2.6982L12.5852 3.54409L14.1361 3.11816L13.2902 4.48608L13.7161 6.03699L12.3482 5.1911L10.7973 5.61703L11.6432 4.24911L11.2172 2.6982Z"
        fill="black"
      />
      <path
        d="M15.1637 6.27883L16.5592 7.07841L18.095 6.60076L17.2954 7.99625L17.773 9.53202L16.3775 8.73244L14.8418 9.21009L15.6414 7.8146L15.1637 6.27883Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.665 7.87686C10.9816 7.19344 9.87358 7.19344 9.19016 7.87686L7.53822 9.5288C6.8548 10.2122 6.8548 11.3203 7.53822 12.0037L16.7538 21.2194C17.4372 21.9028 18.5453 21.9028 19.2287 21.2194L20.8806 19.5675C21.5641 18.884 21.5641 17.776 20.8806 17.0926L11.665 7.87686ZM10.7737 13.1179L12.7792 11.1124L19.82 18.1532C19.9176 18.2509 19.9176 18.4092 19.82 18.5068L18.168 20.1587C18.0704 20.2564 17.9121 20.2564 17.8145 20.1587L10.7737 13.1179ZM11.7186 10.0517L9.71307 12.0572L8.59888 10.943C8.50125 10.8454 8.50125 10.6871 8.59888 10.5895L10.2508 8.93752C10.3485 8.83989 10.5067 8.83989 10.6044 8.93752L11.7186 10.0517Z"
        fill="black"
      />
    </svg>
  );
});

Iconscenedesign.displayName = 'Iconscenedesign';

export default Iconscenedesign;
