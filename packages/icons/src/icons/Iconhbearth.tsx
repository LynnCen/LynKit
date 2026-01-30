import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_ earth
 * @source figma
 */
const Iconhbearth = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.0283 4.59473C14.4852 4.82832 13.8682 5.21826 13.5244 5.9502C13.0189 7.02643 12.7242 7.4544 10.7949 7.48047C8.86641 7.50679 9.47985 9.10563 10.5791 10.043C11.0523 10.4463 10.9849 12.69 9.42676 14.3975C9.03289 14.829 8.51835 14.383 8.73828 13.8418C9.17851 12.7594 9.29255 12.0042 8.66699 11.8193C7.52041 11.481 7.81916 12.952 5.94336 10.959C4.84596 9.79302 4.33218 10.1069 4.03809 11.2197C4.01323 11.4765 4 11.7367 4 12C4 16.4183 7.58172 20 12 20C12.4516 20 12.894 19.9606 13.3252 19.8887C15.063 17.9942 14.8095 16.3378 13.0762 14.6504C11.1211 12.7472 15.9499 9.9909 17.6445 10.8252C19.3389 11.6595 17.2795 12.9579 18.583 13.375C19.0877 13.5365 19.5104 13.4726 19.8906 13.3154C19.9615 12.8874 20 12.4481 20 12C20 8.65367 17.9448 5.78865 15.0283 4.59473Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbearth.displayName = 'Iconhbearth';

export default Iconhbearth;
