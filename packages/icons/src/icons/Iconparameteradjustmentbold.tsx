import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * parameter_adjustment_bold
 * @source figma
 */
const Iconparameteradjustmentbold = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.35 7.0001C16.35 5.97837 15.5218 5.1501 14.5 5.1501C13.4783 5.1501 12.65 5.97837 12.65 7.0001C12.65 8.02182 13.4783 8.8501 14.5 8.8501C15.5218 8.8501 16.35 8.02182 16.35 7.0001ZM14.5 3.3501C16.2053 3.3501 17.6374 4.51949 18.0382 6.1001H21V7.9001H18.0382C17.6374 9.48071 16.2053 10.6501 14.5 10.6501C12.7948 10.6501 11.3626 9.48071 10.9618 7.9001L3 7.9001V6.1001H10.9618C11.3626 4.51949 12.7948 3.3501 14.5 3.3501ZM11.35 17.0001C11.35 15.9784 10.5218 15.1501 9.50002 15.1501C8.4783 15.1501 7.65002 15.9784 7.65002 17.0001C7.65002 18.0218 8.4783 18.8501 9.50002 18.8501C10.5218 18.8501 11.35 18.0218 11.35 17.0001ZM13.0382 16.1001C12.6374 14.5195 11.2053 13.3501 9.50002 13.3501C7.79477 13.3501 6.36265 14.5195 5.96182 16.1001H3V17.9001H5.96182C6.36265 19.4807 7.79477 20.6501 9.50002 20.6501C11.2053 20.6501 12.6374 19.4807 13.0382 17.9001H21V16.1001H13.0382Z"
        fill={color}
      />
    </svg>
  );
});

Iconparameteradjustmentbold.displayName = 'Iconparameteradjustmentbold';

export default Iconparameteradjustmentbold;
