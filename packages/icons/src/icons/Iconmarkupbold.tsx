import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * markup_bold
 * @source figma
 */
const Iconmarkupbold = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.7205 3.29762C14.8808 2.458 13.5195 2.458 12.6799 3.29762L3.02901 12.9485L3.45128 19.8095L10.3122 20.2317L19.9631 10.5808C20.8027 9.7412 20.8027 8.37989 19.9631 7.54026L15.7205 3.29762ZM13.9527 4.57042C14.0894 4.43373 14.311 4.43373 14.4477 4.57042L18.6903 8.81306C18.827 8.94974 18.827 9.17135 18.6903 9.30803L9.61306 18.3853L5.15013 18.1106L4.87545 13.6477L13.9527 4.57042ZM14.2881 6.88104C13.9366 6.52956 13.3668 6.52956 13.0153 6.88104C12.6638 7.23251 12.6638 7.80236 13.0153 8.15383L15.2653 10.4038C15.6168 10.7553 16.1866 10.7553 16.5381 10.4038C16.8896 10.0524 16.8896 9.48251 16.5381 9.13104L14.2881 6.88104ZM14.4017 21.0673L12.4017 21.0673L12.4017 19.2673L14.4017 19.2673L14.4017 21.0673ZM15.6517 21.0673L21.1517 21.0673L21.1517 19.2673L15.6517 19.2673L15.6517 21.0673Z"
        fill={color}
      />
    </svg>
  );
});

Iconmarkupbold.displayName = 'Iconmarkupbold';

export default Iconmarkupbold;
