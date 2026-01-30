import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * feature_inspiration_static
 * @source figma
 */
const Iconfeatureinspirationstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0001 7.24121C9.91927 7.24121 8.23242 8.92805 8.23242 11.0089C8.23242 12.4234 9.01168 13.6565 10.1667 14.3013L10.423 14.4443V15.4958H13.5772V14.4443L13.8335 14.3013C14.9885 13.6565 15.7678 12.4234 15.7678 11.0089C15.7678 8.92805 14.0809 7.24121 12.0001 7.24121ZM7.23242 11.0089C7.23242 8.37577 9.36698 6.24121 12.0001 6.24121C14.6332 6.24121 16.7678 8.37577 16.7678 11.0089C16.7678 12.6933 15.8941 14.173 14.5772 15.0206V16.4958H9.42299V15.0206C8.10608 14.173 7.23242 12.6933 7.23242 11.0089Z"
        fill="#222529"
      />
      <path
        d="M15.8643 10.98C15.8643 13.1144 14.134 14.8447 11.9995 14.8447C9.86508 14.8447 8.13477 13.1144 8.13477 10.98C8.13477 8.84554 9.86508 7.11523 11.9995 7.11523C14.134 7.11523 15.8643 8.84554 15.8643 10.98Z"
        fill="url(#paint0_linear_10701_4097)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17.0591H14V18.0591H10V17.0591Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.96094 9.78355L10.4521 9.18994H13.676L14.1668 9.78571L13.566 12.8641L12.5845 12.6725L13.069 10.1899H11.0564L11.53 12.6751L10.5477 12.8623L9.96094 9.78355Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10701_4097"
          x1="15.8101"
          y1="14.8447"
          x2="15.8101"
          y2="7.11531"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#316DF7" />
          <stop offset="1" stopColor="#569AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

Iconfeatureinspirationstatic.displayName = 'Iconfeatureinspirationstatic';

export default Iconfeatureinspirationstatic;
