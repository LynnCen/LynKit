import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai design
 * @source figma
 */
const Iconaidesign = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M8.1894 10.2502L3.81299 5.87382L4.87365 4.81316L9.25012 9.18963V2.00023L10.7501 2.00023L10.7501 9.18969L14.1268 5.81305L15.1874 6.87371L11.8109 10.2502H19.0002V11.7502L11.8107 11.7502L22.0304 21.9699L20.9697 23.0305L10.7501 12.8109V20.0002H9.25012L9.25012 12.811L3.87371 18.1874L2.81305 17.1268L8.18958 11.7502H1.00024V10.2502H8.1894Z"
        fill="black"
      />
      <path
        d="M18.2774 3.09453C18.6897 3.01206 19.012 2.68973 19.0945 2.27738L19.3871 0.814316C19.5211 0.144413 20.4789 0.144415 20.6129 0.814318L20.9055 2.27738C20.9879 2.68973 21.3103 3.01206 21.7226 3.09453L23.1857 3.38714C23.8556 3.52112 23.8556 4.47889 23.1857 4.61287L21.7226 4.90548C21.3103 4.98795 20.9879 5.31027 20.9055 5.72263L20.6129 7.18569C20.4789 7.85559 19.5211 7.85559 19.3871 7.18569L19.0945 5.72263C19.012 5.31027 18.6897 4.98795 18.2774 4.90548L16.8143 4.61287C16.1444 4.47888 16.1444 3.52112 16.8143 3.38714L18.2774 3.09453Z"
        fill="black"
      />
    </svg>
  );
});

Iconaidesign.displayName = 'Iconaidesign';

export default Iconaidesign;
