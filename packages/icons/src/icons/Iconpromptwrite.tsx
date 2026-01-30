import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * prompt_write
 * @source figma
 */
const Iconpromptwrite = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.292 8.63379C16.3658 7.56002 18.1068 7.56008 19.1807 8.63379L20.3662 9.81836C21.44 10.8923 21.4399 12.634 20.3662 13.708L12.2939 21.7803C12.1533 21.9208 11.9625 22 11.7637 22H7.75C7.3359 22 7.00019 21.6641 7 21.25V17.2363C7.00006 17.0375 7.07919 16.8466 7.21973 16.7061L15.292 8.63379ZM18.1201 9.69434C17.632 9.20643 16.8406 9.20639 16.3525 9.69434L8.5 17.5469V20.5H11.4531L19.3057 12.6475C19.7937 12.1592 19.7938 11.3671 19.3057 10.8789L18.1201 9.69434Z"
        fill="black"
      />
      <path
        d="M7.25195 11C7.66617 11 8.00195 11.3358 8.00195 11.75C8.00195 12.1642 7.66617 12.5 7.25195 12.5H3.75C3.33579 12.5 3 12.1642 3 11.75C3 11.3358 3.33579 11 3.75 11H7.25195Z"
        fill="black"
      />
      <path
        d="M10.25 7C10.6642 7 11 7.33579 11 7.75C11 8.16421 10.6642 8.5 10.25 8.5H3.75C3.33579 8.5 3 8.16421 3 7.75C3 7.33579 3.33579 7 3.75 7H10.25Z"
        fill="black"
      />
      <path
        d="M20.25 3C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H3.75C3.33579 4.5 3 4.16421 3 3.75C3 3.33579 3.33579 3 3.75 3H20.25Z"
        fill="black"
      />
    </svg>
  );
});

Iconpromptwrite.displayName = 'Iconpromptwrite';

export default Iconpromptwrite;
