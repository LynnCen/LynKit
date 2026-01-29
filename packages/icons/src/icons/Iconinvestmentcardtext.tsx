import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * Investment_card_text
 * @source figma
 */
const Iconinvestmentcardtext = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.94238 9.52014C5.94238 9.10593 6.27817 8.77014 6.69238 8.77014H17.3068C17.721 8.77014 18.0568 9.10593 18.0568 9.52014C18.0568 9.93436 17.721 10.2701 17.3068 10.2701H6.69238C6.27817 10.2701 5.94238 9.93436 5.94238 9.52014Z"
        fill="black"
      />
      <path
        d="M6.69238 13.0365C6.27817 13.0365 5.94238 13.3723 5.94238 13.7865C5.94238 14.2007 6.27817 14.5365 6.69238 14.5365H12.7694C13.1836 14.5365 13.5194 14.2007 13.5194 13.7865C13.5194 13.3723 13.1836 13.0365 12.7694 13.0365H6.69238Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 7C2.25 5.48122 3.48122 4.25 5 4.25H19C20.5188 4.25 21.75 5.48122 21.75 7V17C21.75 18.5188 20.5188 19.75 19 19.75H5C3.48122 19.75 2.25 18.5188 2.25 17V7ZM5 5.75C4.30964 5.75 3.75 6.30964 3.75 7V17C3.75 17.6904 4.30964 18.25 5 18.25H19C19.6904 18.25 20.25 17.6904 20.25 17V7C20.25 6.30964 19.6904 5.75 19 5.75H5Z"
        fill="black"
      />
    </svg>
  );
});

Iconinvestmentcardtext.displayName = 'Iconinvestmentcardtext';

export default Iconinvestmentcardtext;
