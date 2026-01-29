import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * music_mute
 * @source figma
 */
const Iconmusicmute = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.0801 5.93871V7.22322L14.6015 6.9466C15.3747 6.80602 15.9516 6.17031 16.0295 5.40246L13.0801 5.93871ZM14.8698 8.42241L13.0801 8.74781V10.6484L11.5801 9.14844V9.02053V4.6875V4.68685L17.5384 3.60352V5.22483C17.5384 6.79551 16.4151 8.14143 14.8698 8.42241ZM11.5833 16.6042C11.5833 17.8698 10.5573 18.8958 9.29167 18.8958C8.02601 18.8958 7 17.8698 7 16.6042C7 15.3385 8.02601 14.3125 9.29167 14.3125C10.516 14.3125 11.5161 15.2726 11.5801 16.481V16.4875H11.5804C11.5824 16.5261 11.5833 16.565 11.5833 16.6042ZM13.0801 15.1121L17.507 19.539L18.6561 18.3899L5.57459 5.30847L4.42554 6.45752L11.4643 13.4963C10.849 13.0654 10.0999 12.8125 9.29167 12.8125C7.19759 12.8125 5.5 14.5101 5.5 16.6042C5.5 18.6982 7.19759 20.3958 9.29167 20.3958C11.3857 20.3958 13.0833 18.6982 13.0833 16.6042C13.0833 16.551 13.0822 16.4982 13.0801 16.4456V15.1121Z"
        fill={color}
      />
    </svg>
  );
});

Iconmusicmute.displayName = 'Iconmusicmute';

export default Iconmusicmute;
