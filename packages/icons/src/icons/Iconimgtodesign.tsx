import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * img_to_design
 * @source figma
 */
const Iconimgtodesign = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.5 5.25C19.7426 5.25001 20.75 6.25737 20.75 7.5V18.5C20.75 19.7426 19.7426 20.75 18.5 20.75H7.5C6.25738 20.75 5.25003 19.7426 5.25 18.5V15H6.75V18.5C6.75003 18.9142 7.08581 19.25 7.5 19.25H7.68945L14.0557 12.8838C15.1295 11.8101 16.8705 11.8101 17.9443 12.8838L19.25 14.1895V7.5C19.25 7.0858 18.9142 6.75 18.5 6.75H13V5.25H18.5ZM16.8838 13.9443C16.3957 13.4564 15.6043 13.4564 15.1162 13.9443L9.81055 19.25H18.5C18.9142 19.25 19.25 18.9142 19.25 18.5V16.3105L16.8838 13.9443Z"
        fill="black"
      />
      <path
        d="M10 3.25C10.4142 3.25 10.75 3.58579 10.75 4V5.5H9.25V4.75H6.75V10.25H7.5V11.75H4.5V10.25H5.25V4.75H2.75V5.5H1.25V4C1.25 3.58579 1.58579 3.25 2 3.25H10Z"
        fill="black"
      />
    </svg>
  );
});

Iconimgtodesign.displayName = 'Iconimgtodesign';

export default Iconimgtodesign;
