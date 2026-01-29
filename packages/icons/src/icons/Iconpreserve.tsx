import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * preserve
 * @source figma
 */
const Iconpreserve = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.3711 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V19C5.5 19.2761 5.72386 19.5 6 19.5H8V17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17V19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V6.79315C18.5 6.66579 18.4514 6.54322 18.3641 6.45047L19.4564 5.42243C19.8056 5.79342 20 6.28369 20 6.79315V19C20 20.1046 19.1046 21 18 21H15H9H6C4.89543 21 4 20.1046 4 19V4C4 2.89543 4.89543 2 6 2H15.3711C15.9226 2 16.4496 2.2277 16.8275 2.62927L19.4564 5.42243L18.3641 6.45047L15.7352 3.65732C15.6408 3.55692 15.509 3.5 15.3711 3.5ZM14.5 19.5V17.5H9.5V19.5H14.5ZM7 12V8H8.5V12H7Z"
        fill="black"
      />
    </svg>
  );
});

Iconpreserve.displayName = 'Iconpreserve';

export default Iconpreserve;
