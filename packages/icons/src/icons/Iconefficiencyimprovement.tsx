import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * efficiency_improvement
 * @source figma
 */
const Iconefficiencyimprovement = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.37717 4.27469L5.55408 2.18042L4.73099 4.27469L2.63672 5.09778L4.73099 5.92087L5.55408 8.01514L6.37717 5.92087L8.47144 5.09778L6.37717 4.27469Z"
        fill="black"
      />
      <path
        d="M4.24365 12.5476L3.02954 11.7968L3.40757 13.1733L2.6568 14.3874L4.03332 14.0094L5.24743 14.7602L4.86939 13.3837L5.62017 12.1696L4.24365 12.5476Z"
        fill="black"
      />
      <path
        d="M11.2172 2.48604L12.5852 3.33193L14.1361 2.906L13.2902 4.27392L13.7161 5.82483L12.3482 4.97894L10.7973 5.40487L11.6432 4.03695L11.2172 2.48604Z"
        fill="black"
      />
      <path
        d="M15.1637 6.06667L16.5592 6.86625L18.095 6.3886L17.2954 7.78409L17.773 9.31986L16.3775 8.52028L14.8418 8.99793L15.6414 7.60244L15.1637 6.06667Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.665 7.6647C10.9816 6.98128 9.87358 6.98128 9.19016 7.6647L7.53822 9.31664C6.8548 10.0001 6.8548 11.1081 7.53822 11.7915L16.7538 21.0072C17.4372 21.6907 18.5453 21.6907 19.2287 21.0072L20.8806 19.3553C21.5641 18.6719 21.5641 17.5638 20.8806 16.8804L11.665 7.6647ZM10.7737 12.9058L12.7792 10.9003L19.82 17.9411C19.9176 18.0387 19.9176 18.197 19.82 18.2946L18.168 19.9466C18.0704 20.0442 17.9121 20.0442 17.8145 19.9466L10.7737 12.9058ZM11.7186 9.83955L9.71307 11.845L8.59888 10.7309C8.50125 10.6332 8.50125 10.4749 8.59888 10.3773L10.2508 8.72536C10.3485 8.62773 10.5067 8.62773 10.6044 8.72536L11.7186 9.83955Z"
        fill="black"
      />
    </svg>
  );
});

Iconefficiencyimprovement.displayName = 'Iconefficiencyimprovement';

export default Iconefficiencyimprovement;
