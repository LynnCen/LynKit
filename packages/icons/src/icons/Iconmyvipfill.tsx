import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * myvip_fill
 * @source figma
 */
const Iconmyvipfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.1826 3.44543C11.5784 2.8517 12.4509 2.8517 12.8467 3.44543L16.2471 8.54602L20.7012 6.3761C21.4422 6.0152 22.2774 6.65566 22.1211 7.46497L19.917 18.879C19.7353 19.82 18.9115 20.5001 17.9531 20.5001H6.04785C5.08949 20.5001 4.26569 19.82 4.08398 18.879L1.87988 7.46497C1.7236 6.65566 2.55876 6.0152 3.2998 6.3761L7.77539 8.55579L11.1826 3.44543ZM11.4277 15.9454L12 16.547L12.5713 15.9454L16.3936 11.921H14.2178L12 14.256L9.78223 11.921H7.60547L11.4277 15.9454Z"
        fill={color}
      />
    </svg>
  );
});

Iconmyvipfill.displayName = 'Iconmyvipfill';

export default Iconmyvipfill;
