import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_clear_fill
 * @source figma
 */
const Iconhbclearfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.707 8.29297C15.3165 7.90252 14.6835 7.90247 14.293 8.29297L12 10.5859L9.70703 8.29297C9.3165 7.90252 8.68347 7.90247 8.29297 8.29297C7.90247 8.68347 7.90252 9.3165 8.29297 9.70703L10.5859 12L8.29297 14.293C7.90247 14.6835 7.90252 15.3165 8.29297 15.707C8.6835 16.0974 9.31654 16.0975 9.70703 15.707L12 13.4141L14.293 15.707L14.3691 15.7754C14.7619 16.0956 15.341 16.0731 15.707 15.707C16.0731 15.341 16.0956 14.7619 15.7754 14.3691L15.707 14.293L13.4141 12L15.707 9.70703C16.0975 9.31654 16.0974 8.6835 15.707 8.29297Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbclearfill.displayName = 'Iconhbclearfill';

export default Iconhbclearfill;
