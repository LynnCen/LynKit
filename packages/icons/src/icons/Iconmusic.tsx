import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * music
 * @source figma
 */
const Iconmusic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.6015 6.9466C15.3747 6.80602 15.9516 6.17031 16.0295 5.40246L13.0801 5.93871V7.22322L14.6015 6.9466ZM11.5801 4.6875V4.68685L17.5384 3.60352V5.22483C17.5384 6.79551 16.4151 8.14143 14.8698 8.42241L13.0801 8.74781V16.4456C13.0822 16.4982 13.0833 16.5511 13.0833 16.6042C13.0833 18.6982 11.3857 20.3958 9.29167 20.3958C7.19759 20.3958 5.5 18.6982 5.5 16.6042C5.5 14.5101 7.19759 12.8125 9.29167 12.8125C10.1513 12.8125 10.9441 13.0986 11.5801 13.5807V9.02053V4.6875ZM11.5801 16.4875V16.481C11.5161 15.2726 10.516 14.3125 9.29167 14.3125C8.02601 14.3125 7 15.3385 7 16.6042C7 17.8698 8.02601 18.8958 9.29167 18.8958C10.5573 18.8958 11.5833 17.8698 11.5833 16.6042C11.5833 16.565 11.5824 16.5261 11.5804 16.4875H11.5801Z"
        fill={color}
      />
    </svg>
  );
});

Iconmusic.displayName = 'Iconmusic';

export default Iconmusic;
