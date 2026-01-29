import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * trades_lingshou
 * @source figma
 */
const Icontradeslingshou = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 2.25C9.92893 2.25 8.25 3.92893 8.25 6V6.25H5.46529C4.5231 6.25 3.75004 6.99595 3.71641 7.93754L3.36181 17.8662C3.28602 19.9883 4.98588 21.75 7.10943 21.75H16.8913C19.0149 21.75 20.7147 19.9883 20.6389 17.8662L20.2843 7.93754C20.2507 6.99595 19.4776 6.25 18.5354 6.25H15.75V6C15.75 3.92893 14.0711 2.25 12 2.25ZM14.25 6.25V6C14.25 4.75736 13.2426 3.75 12 3.75C10.7574 3.75 9.75 4.75736 9.75 6V6.25H14.25ZM5.46529 7.75C5.3307 7.75 5.22026 7.85656 5.21545 7.99108L4.86086 17.9197C4.81538 19.193 5.8353 20.25 7.10943 20.25H16.8913C18.1654 20.25 19.1854 19.193 19.1399 17.9197L18.7853 7.99108C18.7805 7.85656 18.67 7.75 18.5354 7.75H5.46529Z"
        fill="black"
      />
    </svg>
  );
});

Icontradeslingshou.displayName = 'Icontradeslingshou';

export default Icontradeslingshou;
