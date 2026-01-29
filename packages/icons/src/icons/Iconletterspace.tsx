import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * letter_space
 * @source figma
 */
const Iconletterspace = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.75 20V4H4.25L4.25 20H2.75ZM19.75 20V4H21.25V20H19.75ZM11.4143 6L6.40527 18H7.99959L9.61474 14.25H14.5262L15.9998 18H17.5804L13.0017 6H11.4143ZM13.9368 12.75L12.1831 8.28688L10.2608 12.75H13.9368Z"
        fill={color}
      />
    </svg>
  );
});

Iconletterspace.displayName = 'Iconletterspace';

export default Iconletterspace;
