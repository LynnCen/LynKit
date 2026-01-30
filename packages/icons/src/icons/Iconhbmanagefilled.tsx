import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_ manage_filled
 * @source figma
 */
const Iconhbmanagefilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.0627 6.84986C15.0627 9.01478 13.3077 10.7698 11.1427 10.7698C8.97783 10.7698 7.22282 9.01478 7.22282 6.84986C7.22282 4.68494 8.97783 2.92993 11.1427 2.92993C13.3077 2.92993 15.0627 4.68494 15.0627 6.84986Z"
        fill="black"
      />
      <path
        d="M16.1773 14.3988C16.634 13.9422 16.4898 13.1718 15.8788 12.963C14.4147 12.4628 12.8175 12.1724 11.143 12.1374C8.61069 12.1903 6.25534 12.8274 4.26955 13.8906C3.017 14.5613 2.38281 15.9451 2.38281 17.3659V17.5991C2.38281 18.6171 3.20808 19.4424 4.22611 19.4424H10.752C10.9965 19.4424 11.2309 19.3453 11.4038 19.1724L16.1773 14.3988Z"
        fill="black"
      />
      <path
        d="M19.4472 13.1553C19.7351 12.8674 20.202 12.8674 20.4899 13.1553L21.4023 14.0677C21.6903 14.3557 21.6903 14.8225 21.4023 15.1104L20.4682 16.0446L18.5131 14.0895L19.4472 13.1553Z"
        fill="black"
      />
      <path
        d="M13.8789 18.8609C13.9242 18.7253 14.0004 18.6022 14.1014 18.5011L18.0067 14.5961L19.9618 16.5512L16.0565 20.4563C15.9555 20.5573 15.8323 20.6334 15.6968 20.6787L13.6677 21.3566C13.3794 21.4529 13.1049 21.1785 13.2012 20.8901L13.8789 18.8609Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbmanagefilled.displayName = 'Iconhbmanagefilled';

export default Iconhbmanagefilled;
