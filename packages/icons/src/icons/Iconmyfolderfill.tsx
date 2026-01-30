import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * myfolder_fill
 * @source figma
 */
const Iconmyfolderfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.0752 3.5C9.5509 3.5 10.0111 3.66983 10.373 3.97852L11.7832 5.18066C12.1451 5.48923 12.6054 5.65918 13.0811 5.65918H19.5C20.6046 5.65918 21.5 6.55461 21.5 7.65918V18.5C21.5 19.6046 20.6046 20.5 19.5 20.5H4.5C3.39543 20.5 2.5 19.6046 2.5 18.5V5.5C2.5 4.39543 3.39543 3.5 4.5 3.5H9.0752ZM4.75 8.25V9.75H10.25V8.25H4.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconmyfolderfill.displayName = 'Iconmyfolderfill';

export default Iconmyfolderfill;
