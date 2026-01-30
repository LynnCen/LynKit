import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * upload_phone
 * @source figma
 */
const Iconuploadphone = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.5 1.99998C5.67157 1.99998 5 2.67156 5 3.49999V20.5C5 21.3284 5.67157 22 6.5 22H13V20.5H6.5V3.49999L17.5 3.49998V13H19V3.49998C19 2.67156 18.3284 1.99998 17.5 1.99998H6.5Z"
        fill={color}
      />
      <path
        d="M12 19C12.4142 19 12.75 18.6642 12.75 18.25C12.75 17.8358 12.4142 17.5 12 17.5C11.5858 17.5 11.25 17.8358 11.25 18.25C11.25 18.6642 11.5858 19 12 19Z"
        fill={color}
      />
      <path
        d="M17.5303 17.8713L15.8107 19.591L14.75 18.5303L18.2803 15L21.8107 18.5303L20.75 19.591L19.0303 17.8713V22H17.5303V17.8713Z"
        fill={color}
      />
    </svg>
  );
});

Iconuploadphone.displayName = 'Iconuploadphone';

export default Iconuploadphone;
