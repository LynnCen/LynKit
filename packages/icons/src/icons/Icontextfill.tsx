import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_fill
 * @source figma
 */
const Icontextfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7 4.75C6.30964 4.75 5.75 5.30964 5.75 6V7H4.25V6C4.25 4.48122 5.48122 3.25 7 3.25H17C18.5188 3.25 19.75 4.48122 19.75 6V7H18.25V6C18.25 5.30964 17.6904 4.75 17 4.75H12.75V19.25H15V20.75H9V19.25H11.25V4.75H7Z"
        fill={color}
      />
    </svg>
  );
});

Icontextfill.displayName = 'Icontextfill';

export default Icontextfill;
