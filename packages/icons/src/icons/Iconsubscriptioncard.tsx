import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * subscription_card
 * @source figma
 */
const Iconsubscriptioncard = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M8.5 11C7.11929 11 6 12.1193 6 13.5C6 14.8807 7.11929 16 8.5 16H15.5C16.8807 16 18 14.8807 18 13.5C18 12.1193 16.8807 11 15.5 11H8.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.03125 4.28882C3.51247 4.28882 2.28125 5.52004 2.28125 7.03882V17.0323C2.28125 18.5511 3.51247 19.7823 5.03125 19.7823H19.0176C20.5364 19.7823 21.7676 18.5511 21.7676 17.0323V7.03882C21.7676 5.52004 20.5364 4.28882 19.0176 4.28882H5.03125ZM3.78125 7.03882C3.78125 6.34846 4.34089 5.78882 5.03125 5.78882H19.0176C19.7079 5.78882 20.2676 6.34846 20.2676 7.03882V17.0323C20.2676 17.7227 19.7079 18.2823 19.0176 18.2823H5.03125C4.34089 18.2823 3.78125 17.7227 3.78125 17.0323V7.03882Z"
        fill="black"
      />
    </svg>
  );
});

Iconsubscriptioncard.displayName = 'Iconsubscriptioncard';

export default Iconsubscriptioncard;
