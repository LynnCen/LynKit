import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * compression_filled
 * @source figma
 */
const Iconcompressionfilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.7998 3C18.9199 3 19.4804 2.99979 19.9082 3.21777C20.2845 3.40951 20.5905 3.71554 20.7822 4.0918C21.0002 4.51962 21 5.08009 21 6.2002V17.7998C21 18.9199 21.0002 19.4804 20.7822 19.9082C20.5905 20.2845 20.2845 20.5905 19.9082 20.7822C19.4804 21.0002 18.9199 21 17.7998 21H6.2002C5.08009 21 4.51962 21.0002 4.0918 20.7822C3.71554 20.5905 3.40951 20.2845 3.21777 19.9082C2.99979 19.4804 3 18.9199 3 17.7998V6.2002C3 5.08009 2.99979 4.51962 3.21777 4.0918C3.40951 3.71554 3.71554 3.40951 4.0918 3.21777C4.51962 2.99979 5.08009 3 6.2002 3H17.7998ZM8.99805 16.498V19.5H12V16.498H8.99805ZM9 4.5V7.50195H12V10.499H8.99805V13.501H12V16.498H15.002V13.4971H12V10.5029H15.002V7.50195H12.002V4.5H9Z"
        fill={color}
      />
    </svg>
  );
});

Iconcompressionfilled.displayName = 'Iconcompressionfilled';

export default Iconcompressionfilled;
