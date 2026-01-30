import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * optionaled
 * @source figma
 */
const Iconoptionaled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.0481 17.4932L18.1369 8.00769L16.9354 7.10974L10.7477 15.3895L7.56141 12.9905L6.65918 14.1888L11.0481 17.4932Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 3C4.67893 3 3 4.67893 3 6.75V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V6.75C21 4.67893 19.3211 3 17.25 3H6.75ZM4.5 6.75C4.5 5.50736 5.50736 4.5 6.75 4.5H17.25C18.4926 4.5 19.5 5.50736 19.5 6.75V17.25C19.5 18.4926 18.4926 19.5 17.25 19.5H6.75C5.50736 19.5 4.5 18.4926 4.5 17.25V6.75Z"
        fill="black"
      />
    </svg>
  );
});

Iconoptionaled.displayName = 'Iconoptionaled';

export default Iconoptionaled;
