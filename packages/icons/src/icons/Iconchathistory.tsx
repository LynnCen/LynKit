import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * chat_history
 * @source figma
 */
const Iconchathistory = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M17.4502 15.0498H19.75V16.4502H16.0498V12.25H17.4502V15.0498Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.75 8.5C20.3399 8.5 23.25 11.4101 23.25 15C23.25 18.5899 20.3399 21.5 16.75 21.5C13.1601 21.5 10.25 18.5899 10.25 15C10.25 11.4101 13.1601 8.5 16.75 8.5ZM16.75 10C13.9886 10 11.75 12.2386 11.75 15C11.75 17.7614 13.9886 20 16.75 20C19.5114 20 21.75 17.7614 21.75 15C21.75 12.2386 19.5114 10 16.75 10Z"
        fill="black"
      />
      <path d="M8.5 19.5H3V18H8.5V19.5Z" fill="black" />
      <path d="M8.5 12.5H3V11H8.5V12.5Z" fill="black" />
      <path d="M21.5 5.5H3V4H21.5V5.5Z" fill="black" />
    </svg>
  );
});

Iconchathistory.displayName = 'Iconchathistory';

export default Iconchathistory;
