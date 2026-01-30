import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * forward
 * @source figma
 */
const Iconforward = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.8104 2.98397C13.0946 2.86983 13.4197 2.94002 13.6316 3.16128L21.5952 11.4788C21.8735 11.7694 21.8728 12.2279 21.5937 12.5177L13.6301 20.7874C13.4179 21.0078 13.0931 21.0772 12.8094 20.9628C12.5256 20.8484 12.3398 20.5731 12.3398 20.2672V15.8603C9.51053 16.0486 6.97073 17.3043 5.06134 19.4592C4.85469 19.6924 4.52536 19.7736 4.23401 19.663C3.94267 19.5525 3.75 19.2734 3.75 18.9618C3.75 15.459 4.74341 12.7571 6.45272 10.9246C7.99661 9.26935 10.0656 8.38718 12.3398 8.22986V3.67996C12.3398 3.37364 12.5261 3.09811 12.8104 2.98397ZM13.8398 5.54777V8.95419C13.8398 9.3684 13.5041 9.70419 13.0898 9.70419C10.8738 9.70419 8.93666 10.4607 7.54963 11.9477C6.4459 13.131 5.64488 14.8264 5.36189 17.0882C7.52715 15.3013 10.1991 14.3355 13.0898 14.3355C13.5041 14.3355 13.8398 14.6713 13.8398 15.0855V18.4071L20.0137 11.996L13.8398 5.54777Z"
        fill="black"
      />
    </svg>
  );
});

Iconforward.displayName = 'Iconforward';

export default Iconforward;
