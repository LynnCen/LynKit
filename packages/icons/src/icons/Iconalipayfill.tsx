import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * alipay_fill
 * @source figma
 */
const Iconalipayfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M24 21.1025V17.1162C24 17.1162 23.1565 17.049 19.424 15.8024C18.8212 15.5986 18.0975 15.3343 17.2924 15.0403C16.7116 14.8282 16.0884 14.6006 15.4377 14.3691C16.3708 12.7567 17.1173 10.9128 17.6025 8.9197H12.4965V7.08333H18.7521V6.06063H12.4965V3H9.95096C9.50307 3 9.50307 3.44043 9.50307 3.44043V6.06063H3.17279V7.08333H9.4956V8.9197H4.27014V9.9424H14.4001C14.0343 11.2114 13.5341 12.4058 12.9444 13.4957C9.65237 12.4133 6.14384 11.5399 3.94168 12.0774C2.53081 12.4282 1.62755 13.0404 1.09007 13.6898C-1.35843 16.6609 0.395831 21.1697 5.56904 21.1697C8.62967 21.1697 11.5709 19.4677 13.8551 16.6683C17.2592 18.3031 24 21.1025 24 21.1025ZM1.85896 14.5483C2.52334 13.966 3.74013 13.6823 4.38958 13.6152C6.77836 13.3763 8.99545 14.287 11.6156 15.5635C9.77927 17.9523 7.43528 19.4453 5.09128 19.4453C1.06021 19.4453 -0.134181 16.2801 1.85896 14.5483Z"
        fill={color}
      />
    </svg>
  );
});

Iconalipayfill.displayName = 'Iconalipayfill';

export default Iconalipayfill;
