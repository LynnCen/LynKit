import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * trades_jinrong
 * @source figma
 */
const Icontradesjinrong = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.75 9.75H16V8.25H14.6391L16.3588 6.53033L15.2982 5.46967L12.9142 7.85364L10.5303 5.46973L9.46961 6.53039L11.1892 8.25H10V9.75H12.25V10.75H10V12.25H12.25V13.5H13.75V12.25H16V10.75H13.75V9.75Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 2.25C6.08579 2.25 5.75 2.58579 5.75 3V15.25H4C3.80109 15.25 3.61032 15.329 3.46967 15.4697C3.32902 15.6103 3.25 15.8011 3.25 16V18C3.25 20.0711 4.92893 21.75 7 21.75H18C19.5188 21.75 20.75 20.5188 20.75 19V3C20.75 2.58579 20.4142 2.25 20 2.25H6.5ZM16 15.25H7.25V3.75H19.25V19C19.25 19.6904 18.6904 20.25 18 20.25C17.542 20.25 17.2714 20.079 17.0898 19.8281C16.885 19.545 16.75 19.0927 16.75 18.5V16C16.75 15.5858 16.4142 15.25 16 15.25ZM15.25 18.5C15.25 19.1057 15.3532 19.7171 15.6053 20.25H7C5.75736 20.25 4.75 19.2426 4.75 18V16.75H15.25V18.5Z"
        fill="black"
      />
    </svg>
  );
});

Icontradesjinrong.displayName = 'Icontradesjinrong';

export default Icontradesjinrong;
