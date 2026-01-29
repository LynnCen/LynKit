import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * user
 * @source figma
 */
const Iconuser = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5ZM15 7.5C15 5.84315 13.6569 4.5 12 4.5C10.3431 4.5 9 5.84315 9 7.5C9 9.15685 10.3431 10.5 12 10.5C13.6569 10.5 15 9.15685 15 7.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 21V18.6667C3 18.6667 3 14 12 14C21 14 21 18.6667 21 18.6667V21H3ZM19.4965 18.6708C19.4894 18.6193 19.472 18.5231 19.4313 18.3965C19.3514 18.1477 19.1786 17.7721 18.7952 17.3745C18.0485 16.6001 16.2546 15.5 12 15.5C7.74537 15.5 5.95155 16.6001 5.20477 17.3745C4.82144 17.7721 4.64864 18.1477 4.56867 18.3965C4.52799 18.5231 4.51064 18.6193 4.50355 18.6708C4.50177 18.6837 4.50067 18.6936 4.5 18.7003V19.5H19.5V18.7003C19.4993 18.6936 19.4982 18.6837 19.4965 18.6708Z"
        fill={color}
      />
    </svg>
  );
});

Iconuser.displayName = 'Iconuser';

export default Iconuser;
