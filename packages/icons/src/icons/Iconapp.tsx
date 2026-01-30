import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * app
 * @source figma
 */
const Iconapp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.711 2.54368C15.193 2.81327 15.3652 3.42257 15.0956 3.90458L13.1272 7.42388L17.6027 15.4257H20.75C21.3023 15.4257 21.75 15.8734 21.75 16.4257C21.75 16.9779 21.3023 17.4257 20.75 17.4257H18.7213L19.8355 19.4177C20.1051 19.8997 19.9329 20.509 19.4509 20.7786C18.9688 21.0482 18.3595 20.876 18.0899 20.394L16.4297 17.4257H7.53316L5.87294 20.394C5.60335 20.876 4.99405 21.0482 4.51204 20.7786C4.03002 20.509 3.85782 19.8997 4.12742 19.4177L5.24158 17.4257H3.25C2.69772 17.4257 2.25 16.9779 2.25 16.4257C2.25 15.8734 2.69772 15.4257 3.25 15.4257H6.3602L10.8357 7.42388L8.86729 3.90458C8.59769 3.42257 8.76989 2.81327 9.25191 2.54368C9.73392 2.27408 10.3432 2.44628 10.6128 2.9283L11.9814 5.3753L13.3501 2.9283C13.6197 2.44628 14.229 2.27408 14.711 2.54368ZM8.65177 15.4257H15.3111L11.9814 9.47246L8.65177 15.4257Z"
        fill="black"
      />
    </svg>
  );
});

Iconapp.displayName = 'Iconapp';

export default Iconapp;
