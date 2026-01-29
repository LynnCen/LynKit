import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * edit
 * @source figma
 */
const Iconedit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.3321 4.00668L6.46621 14.9103C6.25643 15.1208 6.1138 15.389 6.05642 15.6808L5.45119 18.7589L8.52289 18.1473C8.81412 18.0893 9.08159 17.946 9.29137 17.7355L20.1867 6.80234C20.453 5.16555 19.0266 3.71478 17.3585 4.00213L17.3321 4.00668ZM8.81507 19.6198C9.39753 19.5038 9.93247 19.2172 10.352 18.7961L21.398 7.71185C21.5005 7.60896 21.5727 7.47972 21.6066 7.33836C22.2687 4.57909 19.8965 2.0416 17.1046 2.52254L16.8655 2.56372C16.6982 2.59255 16.5438 2.67269 16.4239 2.79308L5.40555 13.8497C4.98599 14.2707 4.70074 14.807 4.58597 15.3907L3.83657 19.202C3.69913 19.901 4.3141 20.516 5.01165 20.3771L8.81507 19.6198Z"
        fill="black"
      />
    </svg>
  );
});

Iconedit.displayName = 'Iconedit';

export default Iconedit;
