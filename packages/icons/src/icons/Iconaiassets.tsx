import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai assets
 * @source figma
 */
const Iconaiassets = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.0945 2.27738C19.0121 2.68973 18.6897 3.01206 18.2774 3.09453L16.8143 3.38714C16.1444 3.52112 16.1444 4.47888 16.8143 4.61287L18.2774 4.90548C18.6897 4.98795 19.0121 5.31027 19.0945 5.72263L19.3871 7.18569C19.5211 7.85559 20.4789 7.85559 20.6129 7.18569L20.9055 5.72263C20.9879 5.31027 21.3103 4.98795 21.7226 4.90548L23.1857 4.61287C23.8556 4.47889 23.8556 3.52112 23.1857 3.38714L21.7226 3.09453C21.3103 3.01206 20.9879 2.68973 20.9055 2.27738L20.6129 0.814318C20.4789 0.144415 19.5211 0.144413 19.3871 0.814316L19.0945 2.27738Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1945 4.11543C13.1498 3.30534 12.2098 2.88289 11.5744 3.38729L5.28718 8.37765C4.70017 8.84359 4.81536 9.76581 5.49895 10.073L12.2285 13.0974C12.9121 13.4047 13.6782 12.8785 13.6369 12.1302L13.1945 4.11543ZM11.7501 5.1629L6.86333 9.04169L12.0939 11.3924L11.7501 5.1629Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17C12 19.7614 9.76142 22 7 22C4.23858 22 2 19.7614 2 17C2 14.2386 4.23858 12 7 12C9.76142 12 12 14.2386 12 17ZM10.5 17C10.5 18.933 8.933 20.5 7 20.5C5.067 20.5 3.5 18.933 3.5 17C3.5 15.067 5.067 13.5 7 13.5C8.933 13.5 10.5 15.067 10.5 17Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6514 12L22.757 14.5589L20.1981 22.6646L12.0925 20.1057L14.6514 12ZM15.6302 13.882L20.8751 15.5377L19.2193 20.7826L13.9744 19.1268L15.6302 13.882Z"
        fill="black"
      />
    </svg>
  );
});

Iconaiassets.displayName = 'Iconaiassets';

export default Iconaiassets;
