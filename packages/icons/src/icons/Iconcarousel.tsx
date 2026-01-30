import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * carousel
 * @source figma
 */
const Iconcarousel = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M6.25 7C6.25 5.48122 7.48122 4.25 9 4.25H15C16.5188 4.25 17.75 5.48122 17.75 7V17C17.75 18.5188 16.5188 19.75 15 19.75H9C7.48122 19.75 6.25 18.5188 6.25 17V7ZM9 5.75C8.30964 5.75 7.75 6.30964 7.75 7V17C7.75 17.6904 8.30964 18.25 9 18.25H15C15.6904 18.25 16.25 17.6904 16.25 17V7C16.25 6.30964 15.6904 5.75 15 5.75H9Z"
        fill="black"
      />
      <path
        d="M21 7.75C20.5858 7.75 20.25 8.08579 20.25 8.5V15.5C20.25 15.9142 20.5858 16.25 21 16.25H22V17.75H21C19.7574 17.75 18.75 16.7426 18.75 15.5V8.5C18.75 7.25736 19.7574 6.25 21 6.25H22V7.75H21Z"
        fill="black"
      />
      <path
        d="M2 7.75H3C3.41421 7.75 3.75 8.08579 3.75 8.5V15.5C3.75 15.9142 3.41421 16.25 3 16.25H2V17.75H3C4.24264 17.75 5.25 16.7426 5.25 15.5V8.5C5.25 7.25736 4.24264 6.25 3 6.25H2V7.75Z"
        fill="black"
      />
    </svg>
  );
});

Iconcarousel.displayName = 'Iconcarousel';

export default Iconcarousel;
