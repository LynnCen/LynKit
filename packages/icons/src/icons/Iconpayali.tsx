import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * pay_ali
 * @source figma
 */
const Iconpayali = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
        fill={color}
      />
      <path
        d="M16.9211 14.4755C16.2463 14.2657 15.3184 13.8881 14.264 13.5105C14.8967 12.4615 15.3606 11.2448 15.698 9.9021H12.2818V8.68531H16.4572V8.01399H12.2818V6H10.5947C10.2995 6 10.2995 6.29371 10.2995 6.29371V8.01399H6.08186V8.68531H10.2995V9.9021H6.84103V10.5734H13.5892C13.3362 11.4126 12.9988 12.2098 12.6192 12.9231C10.426 12.2098 8.10632 11.6224 6.63015 12C5.70227 12.2098 5.06963 12.6294 4.73222 13.049C3.08735 15.021 4.26828 18 7.72673 18C9.75119 18 11.7335 16.8671 13.2518 15.021C15.5293 16.1119 20 17.958 20 17.958V15.3147C19.9578 15.3147 19.4095 15.2727 16.9211 14.4755ZM7.38932 16.8671C4.69005 16.8671 3.93087 14.7692 5.23834 13.6364C5.6601 13.2587 6.50362 13.049 6.92538 13.007C8.52808 12.8392 10.0042 13.4685 11.7335 14.3077C10.5104 15.9021 8.94984 16.8671 7.38932 16.8671Z"
        fill="white"
      />
    </svg>
  );
});

Iconpayali.displayName = 'Iconpayali';

export default Iconpayali;
