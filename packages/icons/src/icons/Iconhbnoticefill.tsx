import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_notice_fill
 * @source figma
 */
const Iconhbnoticefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.6921 16.3006C20.1802 16.5733 20.6592 17.0153 20.6592 17.5745C20.6592 18.1337 20.2059 18.587 19.6467 18.587H4.6824C4.12322 18.587 3.66992 18.1337 3.66992 17.5745C3.66992 17.0153 4.15438 16.5784 4.63094 16.2859C5.12682 15.9815 5.47536 15.4549 5.47536 14.8562L5.65212 8.77736C5.65212 5.00864 8.38852 1.95312 12.1572 1.95312C15.926 1.95312 18.6358 5.00864 18.6358 8.77736L18.746 14.8551C18.746 15.4638 19.1512 15.9984 19.6921 16.3006Z"
        fill="black"
      />
      <path
        d="M11.9983 22.0413C10.6112 22.0413 9.4873 20.9174 9.4873 19.5303H14.5093C14.5093 20.9174 13.3854 22.0413 11.9983 22.0413Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbnoticefill.displayName = 'Iconhbnoticefill';

export default Iconhbnoticefill;
