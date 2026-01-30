import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_filled
 * @source figma
 */
const Icontextfilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7 5C6.44772 5 6 5.44772 6 6V7H4V6C4 4.34315 5.34315 3 7 3H17C18.6569 3 20 4.34315 20 6V7H18V6C18 5.44772 17.5523 5 17 5H13V19H15V21H9V19H11V5H7Z"
        fill={color}
      />
    </svg>
  );
});

Icontextfilled.displayName = 'Icontextfilled';

export default Icontextfilled;
