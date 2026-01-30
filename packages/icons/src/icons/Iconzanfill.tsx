import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * zan_fill
 * @source figma
 */
const Iconzanfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.827 2.16455C11.0313 2.16455 10.2984 2.59711 9.9139 3.29377L6.82706 8.88611C6.73367 9.05531 6.68111 9.24399 6.67357 9.4371L6.32383 18.3974C6.25188 20.2407 7.72671 21.7742 9.57136 21.7742H15.8835C18.1352 21.7742 20.0701 20.1946 20.5562 18.0069C20.6107 17.7613 20.6648 17.5187 20.7185 17.2779C21.0526 15.7791 21.3719 14.3463 21.7038 12.6688C22.1589 10.3683 20.3718 8.277 18.0556 8.277H13.287L13.9718 4.76831C14.2351 3.41895 13.2018 2.16455 11.827 2.16455Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.05817 9.18784C4.47199 9.20578 4.79293 9.55579 4.77499 9.96962L4.37431 19.2135C4.35637 19.6273 4.00636 19.9482 3.59253 19.9303C3.17871 19.9124 2.85778 19.5624 2.87572 19.1485L3.27639 9.90466C3.29433 9.49084 3.64434 9.16991 4.05817 9.18784Z"
        fill="black"
      />
    </svg>
  );
});

Iconzanfill.displayName = 'Iconzanfill';

export default Iconzanfill;
