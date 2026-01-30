import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * qq_fill
 * @source figma
 */
const Iconqqfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.741 10.3373C18.7608 10.083 18.7797 9.8102 18.7797 9.55594C18.7797 5.37802 15.7434 2 11.992 2C8.24063 2 5.2043 5.37802 5.2043 9.55594C5.2043 9.82877 5.22407 10.1008 5.24297 10.3736C4.10167 12.5167 2.40001 17.0392 3.21217 18.4017C3.30928 18.5656 4.29503 17.6753 5.08828 16.2587C5.10804 17.8391 5.95887 19.2735 7.33136 20.2728C6.20982 20.4544 5.18453 21.1268 5.26188 21.4714C5.39767 22.0526 8.14351 22.1801 11.5081 21.7257C11.5279 21.7257 11.5468 21.7257 11.5855 21.7071C11.7213 21.7071 11.8562 21.7257 11.992 21.7257C12.1278 21.7257 12.2627 21.7257 12.3985 21.7071C12.4183 21.7071 12.4372 21.7071 12.4758 21.7257C15.8602 22.1801 18.5872 22.0526 18.7221 21.4714C18.7995 21.126 17.7742 20.4544 16.6526 20.2728C18.026 19.2735 18.8768 17.8206 18.8957 16.2224C19.6692 17.6753 20.6945 18.5834 20.7907 18.4017C21.6037 17.0392 19.8626 12.4618 18.741 10.3373Z"
        fill={color}
      />
    </svg>
  );
});

Iconqqfill.displayName = 'Iconqqfill';

export default Iconqqfill;
