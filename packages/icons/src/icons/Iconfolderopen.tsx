import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * folder_open
 * @source figma
 */
const Iconfolderopen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.88025 4.99967C9.37375 4.51374 8.70029 4.2434 7.99915 4.25012L4.96091 4.27927C3.99708 4.28852 3.25004 5.08592 3.25004 6.02972V9.30843C2.39215 9.536 1.81047 10.3961 1.9805 11.3176L3.27215 18.3176C3.42531 19.1476 4.14907 19.75 4.9931 19.75H19.0187C19.8637 19.75 20.588 19.1463 20.7401 18.3152L22.0217 11.3152C22.1904 10.3939 21.608 9.53465 20.75 9.30798V8.15427C20.75 7.20425 19.9933 6.40374 19.0228 6.40374H11.8148C11.5143 6.40374 11.2219 6.28686 10.9976 6.07166L9.88025 4.99967ZM19.75 9.25L19.25 8.75V8.15427C19.25 7.99914 19.1317 7.90374 19.0228 7.90374H11.8148C11.7676 7.90374 11.7206 7.90249 11.6737 7.9H4.75004V8.75L4.25004 9.25H19.75ZM3.4556 11.0454C3.42724 10.8917 3.5452 10.75 3.70144 10.75H20.3003C20.4564 10.75 20.5744 10.8915 20.5462 11.045L19.2647 18.045C19.2429 18.1638 19.1394 18.25 19.0187 18.25H4.9931C4.87252 18.25 4.76913 18.1639 4.74725 18.0454L3.4556 11.0454Z"
        fill={color}
      />
    </svg>
  );
});

Iconfolderopen.displayName = 'Iconfolderopen';

export default Iconfolderopen;
