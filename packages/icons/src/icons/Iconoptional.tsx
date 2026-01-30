import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * optional
 * @source figma
 */
const Iconoptional = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.75 11.25H17V12.75H12.75V17H11.25V12.75H7V11.25H11.25V7H12.75V11.25Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75Z"
        fill="black"
      />
    </svg>
  );
});

Iconoptional.displayName = 'Iconoptional';

export default Iconoptional;
