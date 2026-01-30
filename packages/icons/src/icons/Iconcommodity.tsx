import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * commodity
 * @source figma
 */
const Iconcommodity = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0002 1.25C9.92914 1.25 8.25021 2.92893 8.25021 5V7H6.75118C5.74877 7 4.9012 7.74206 4.76872 8.73567L3.30206 19.7357C3.14219 20.9346 4.07493 22 5.28451 22H18.7158C19.9254 22 20.8581 20.9346 20.6982 19.7357L19.2316 8.73567C19.0991 7.74206 18.2515 7 17.2491 7H15.7502V5C15.7502 2.92893 14.0713 1.25 12.0002 1.25ZM14.2502 8.5V11H15.7502V8.5H17.2491C17.4997 8.5 17.7116 8.68552 17.7447 8.93392L19.2114 19.9339C19.2514 20.2337 19.0182 20.5 18.7158 20.5H5.28451C4.98212 20.5 4.74893 20.2337 4.7889 19.9339L6.25556 8.93392C6.28868 8.68551 6.50058 8.5 6.75118 8.5H8.25021V11H9.75021V8.5H14.2502ZM14.2502 7V5C14.2502 3.75736 13.2428 2.75 12.0002 2.75C10.7576 2.75 9.75021 3.75736 9.75021 5V7H14.2502Z"
        fill="black"
      />
    </svg>
  );
});

Iconcommodity.displayName = 'Iconcommodity';

export default Iconcommodity;
