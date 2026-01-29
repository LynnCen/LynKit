import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_eliminate
 * @source figma
 */
const Iconaieliminate = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 5.05C3 3.91782 3.91782 3 5.05 3H18.95C20.0822 3 21 3.91782 21 5.05V13H19.5V5.05C19.5 4.74624 19.2538 4.5 18.95 4.5H5.05C4.74624 4.5 4.5 4.74624 4.5 5.05V18.95C4.5 19.2538 4.74624 19.5 5.05 19.5H11.5V21H5.05C3.91782 21 3 20.0822 3 18.95V5.05ZM23.5 14.5557H22V21.0525H23.5V14.5557ZM17.1313 18.0127H18.3757L17.2915 16.1557L14.5 21.0518H13L17.2915 13.6006L21.6565 21.0518H20.15L19.2514 19.5127H16.3L17.1313 18.0127ZM14.3304 7.46966C14.0375 7.17677 13.5626 7.17677 13.2697 7.46966L8.17855 12.5608C8.0379 12.7015 7.95888 12.8922 7.95888 13.0912V15.6367C7.95888 15.8357 8.0379 16.0264 8.17855 16.1671C8.3192 16.3077 8.50997 16.3867 8.70888 16.3867H11.2545C11.4534 16.3867 11.6441 16.3077 11.7848 16.1671L16.876 11.0759C17.1689 10.783 17.1689 10.3081 16.876 10.0152L14.3304 7.46966ZM9.45888 13.4018L13.8 9.06065L15.285 10.5456L10.9438 14.8867L9.45888 14.8867L9.45888 13.4018Z"
        fill="black"
        fillOpacity={0.1}
      />
    </svg>
  );
});

Iconaieliminate.displayName = 'Iconaieliminate';

export default Iconaieliminate;
