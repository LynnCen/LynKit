import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * prohibit
 * @source figma
 */
const Iconprohibit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.4567 18.5175C15.9803 19.7549 14.0772 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 9.92284 4.24507 8.0197 5.48253 6.54326L17.4567 18.5175ZM18.5174 17.4568L6.54319 5.48259C8.01964 4.24509 9.92281 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 14.0772 19.7549 15.9804 18.5174 17.4568ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill={color}
      />
    </svg>
  );
});

Iconprohibit.displayName = 'Iconprohibit';

export default Iconprohibit;
