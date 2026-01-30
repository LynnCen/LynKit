import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * phone_edit
 * @source figma
 */
const Iconphoneedit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <g clipPath="url(#clip0_15435_4090)">
        <path
          d="M12 17.75C12.4142 17.75 12.75 18.0858 12.75 18.5C12.75 18.9142 12.4142 19.25 12 19.25C11.5858 19.25 11.25 18.9142 11.25 18.5C11.25 18.0858 11.5858 17.75 12 17.75Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3.5C5 2.67157 5.67157 2 6.5 2H17.5C18.3284 2 19 2.67157 19 3.5V20.5C19 21.3284 18.3284 22 17.5 22H6.5C5.67157 22 5 21.3284 5 20.5V3.5ZM17.5 3.5L6.5 3.5V20.5H17.5V3.5Z"
          fill={color}
        />
        <circle cx="19.5" cy="17.5" r="5.25" fill={color} stroke="white" strokeWidth={1.5} />
        <path
          d="M18.1925 17.8688C18.1183 17.943 18.0729 18.0412 18.0645 18.1459L18.0001 18.9523C17.998 18.9795 18.0207 19.0021 18.0478 18.9998L18.8531 18.9338C18.9574 18.9252 19.0553 18.8799 19.1293 18.8059L21.8447 16.0919C22.0518 15.885 22.0518 15.5495 21.8447 15.3425L21.6573 15.1552C21.4502 14.9483 21.1145 14.9483 20.9075 15.1552L18.1925 17.8688Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_15435_4090">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

Iconphoneedit.displayName = 'Iconphoneedit';

export default Iconphoneedit;
