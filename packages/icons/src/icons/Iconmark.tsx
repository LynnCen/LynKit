import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * mark
 * @source figma
 */
const Iconmark = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 18L19.3244 20.7467C19.6513 20.8692 20 20.6276 20 20.2785V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V20.2785C4 20.6276 4.34869 20.8692 4.67556 20.7467L12 18ZM12 16.398L5.5 18.8355V5C5.5 4.72386 5.72386 4.5 6 4.5H18C18.2761 4.5 18.5 4.72386 18.5 5V18.8355L12 16.398Z"
        fill={color}
      />
    </svg>
  );
});

Iconmark.displayName = 'Iconmark';

export default Iconmark;
