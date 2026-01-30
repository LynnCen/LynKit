import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * mockup_hb_fill
 * @source figma
 */
const Iconmockuphbfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.7881 6.6324C21.139 7.39873 21.139 9.34526 19.7881 10.1116L12.9869 13.9697C12.3748 14.3169 11.6253 14.3169 11.0133 13.9697L4.21204 10.1116C2.86114 9.34526 2.86114 7.39873 4.21204 6.6324L11.0133 2.77426C11.6253 2.42705 12.3748 2.42705 12.9869 2.77426L19.7881 6.6324Z"
        fill={color}
      />
      <path
        d="M20.7516 12.3233C21.0241 12.8037 20.8556 13.414 20.3752 13.6865L13.727 17.4579C12.6559 18.0655 11.3443 18.0655 10.2731 17.4579L3.62493 13.6865C3.14455 13.414 2.97604 12.8037 3.24854 12.3233C3.52104 11.843 4.13137 11.6744 4.61175 11.9469L11.26 15.7183C11.719 15.9787 12.2811 15.9787 12.7402 15.7183L19.3884 11.9469C19.8688 11.6744 20.4791 11.843 20.7516 12.3233Z"
        fill={color}
      />
      <path
        d="M20.7516 16.0456C21.0241 16.5259 20.8556 17.1363 20.3752 17.4088L14.2204 20.9002C12.8433 21.6814 11.1569 21.6814 9.77973 20.9002L3.62493 17.4088C3.14455 17.1363 2.97604 16.5259 3.24854 16.0456C3.52104 15.5652 4.13137 15.3967 4.61175 15.6692L10.7666 19.1606C11.5316 19.5946 12.4685 19.5946 13.2336 19.1606L19.3884 15.6692C19.8688 15.3967 20.4791 15.5652 20.7516 16.0456Z"
        fill={color}
      />
    </svg>
  );
});

Iconmockuphbfill.displayName = 'Iconmockuphbfill';

export default Iconmockuphbfill;
