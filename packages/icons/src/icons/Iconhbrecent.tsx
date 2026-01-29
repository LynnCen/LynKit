import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_recent
 * @source figma
 */
const Iconhbrecent = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 2C17.5228 2 22 6.47715 22 12L21.9873 12.5146C21.7195 17.7983 17.3502 22 12 22L11.4854 21.9873C6.37212 21.7281 2.2719 17.6279 2.0127 12.5146L2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM11.71 7.15332C12.2622 7.15332 12.71 7.60104 12.71 8.15332V11.7295L14.6729 12.6133C15.1765 12.8398 15.4013 13.4319 15.1748 13.9355C14.9482 14.4391 14.3561 14.664 13.8525 14.4375L11.2998 13.2891C10.941 13.1276 10.7101 12.7704 10.71 12.377V8.15332C10.71 7.60109 11.1578 7.15341 11.71 7.15332Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbrecent.displayName = 'Iconhbrecent';

export default Iconhbrecent;
