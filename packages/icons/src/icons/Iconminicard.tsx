import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * minicard
 * @source figma
 */
const Iconminicard = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M5.87891 8.15063H18.1211V11.1506H5.87891V8.15063Z" fill="black" />
      <path d="M15.1211 12.8494H5.87891V15.8494H15.1211V12.8494Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.28125 7.03882C2.28125 5.52004 3.51247 4.28882 5.03125 4.28882H19.0176C20.5364 4.28882 21.7676 5.52004 21.7676 7.03882V17.0323C21.7676 18.5511 20.5364 19.7823 19.0176 19.7823H5.03125C3.51247 19.7823 2.28125 18.5511 2.28125 17.0323V7.03882ZM5.03125 5.78882C4.34089 5.78882 3.78125 6.34846 3.78125 7.03882V17.0323C3.78125 17.7227 4.34089 18.2823 5.03125 18.2823H19.0176C19.7079 18.2823 20.2676 17.7227 20.2676 17.0323V7.03882C20.2676 6.34846 19.7079 5.78882 19.0176 5.78882H5.03125Z"
        fill="black"
      />
    </svg>
  );
});

Iconminicard.displayName = 'Iconminicard';

export default Iconminicard;
