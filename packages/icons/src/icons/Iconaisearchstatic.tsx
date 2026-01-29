import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_search_static
 * @source figma
 */
const Iconaisearchstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.6262 2.25409C16.7603 1.9153 17.2397 1.9153 17.3738 2.25409L17.903 3.59115C18.1754 4.27953 18.7205 4.82456 19.4088 5.097L20.7459 5.62617C21.0847 5.76025 21.0847 6.23975 20.7459 6.37383L19.4088 6.903C18.7205 7.17544 18.1754 7.72047 17.903 8.40885L17.3738 9.74591C17.2397 10.0847 16.7603 10.0847 16.6262 9.74591L16.097 8.40885C15.8246 7.72047 15.2795 7.17544 14.5912 6.903L13.2541 6.37383C12.9153 6.23975 12.9153 5.76025 13.2541 5.62617L14.5912 5.097C15.2795 4.82456 15.8246 4.27953 16.097 3.59115L16.6262 2.25409Z"
        fill="url(#paint0_radial_12693_4070)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.34985 11.4C4.34985 7.50637 7.50625 4.34998 11.3999 4.34998C11.8141 4.34998 12.1499 4.01419 12.1499 3.59998C12.1499 3.18576 11.8141 2.84998 11.3999 2.84998C6.67782 2.84998 2.84985 6.67794 2.84985 11.4C2.84985 16.122 6.67782 19.95 11.3999 19.95C13.4908 19.95 15.4065 19.1994 16.8921 17.9529L19.8695 20.9303C20.1624 21.2232 20.6373 21.2232 20.9302 20.9303C21.2231 20.6374 21.2231 20.1625 20.9302 19.8696L17.9528 16.8922C19.1992 15.4066 19.9499 13.491 19.9499 11.4C19.9499 10.9858 19.6141 10.65 19.1999 10.65C18.7856 10.65 18.4499 10.9858 18.4499 11.4C18.4499 15.2936 15.2935 18.45 11.3999 18.45C7.50625 18.45 4.34985 15.2936 4.34985 11.4Z"
        fill="#222529"
      />
      <defs>
        <radialGradient
          id="paint0_radial_12693_4070"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11.1964 7.41667) scale(11.8393 22.3846)"
        >
          <stop offset="0.00310907" stopColor="#3160F7" />
          <stop offset="0.725468" stopColor="#7BD9C8" />
          <stop offset="1" stopColor="#B7E768" />
        </radialGradient>
      </defs>
    </svg>
  );
});

Iconaisearchstatic.displayName = 'Iconaisearchstatic';

export default Iconaisearchstatic;
