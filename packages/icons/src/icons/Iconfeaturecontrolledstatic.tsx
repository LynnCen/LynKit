import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * feature_controlled_static
 * @source figma
 */
const Iconfeaturecontrolledstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.8852 10.4507C13.1941 10.8292 13.5524 11.1658 13.9503 11.4507H3.64844C2.82001 11.4507 2.14844 10.7791 2.14844 9.95068V4.95068C2.14844 4.12226 2.82001 3.45068 3.64844 3.45068H12.9263C12.6699 3.75745 12.4463 4.09258 12.261 4.45068H3.64844C3.3723 4.45068 3.14844 4.67454 3.14844 4.95068V9.95068C3.14844 10.2268 3.3723 10.4507 3.64844 10.4507H12.8852Z"
        fill="black"
      />
      <path d="M4.64844 6.45068H6.64844V8.45068H4.64844V6.45068Z" fill="black" />
      <path d="M6.64844 16.5005H4.64844V18.5005H6.64844V16.5005Z" fill="black" />
      <path d="M10.0483 16.5005H8.04834V18.5005H10.0483V16.5005Z" fill="black" />
      <path d="M11.4482 16.5005H18.4482V18.461H11.4482V16.5005Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.14844 15.0005C2.14844 14.1721 2.82001 13.5005 3.64844 13.5005H19.6484C20.4769 13.5005 21.1484 14.1721 21.1484 15.0005V20.0005C21.1484 20.8289 20.4769 21.5005 19.6484 21.5005H3.64844C2.82001 21.5005 2.14844 20.8289 2.14844 20.0005V15.0005ZM3.64844 14.5005C3.3723 14.5005 3.14844 14.7243 3.14844 15.0005V20.0005C3.14844 20.2766 3.3723 20.5005 3.64844 20.5005H19.6484C19.9246 20.5005 20.1484 20.2766 20.1484 20.0005V15.0005C20.1484 14.7243 19.9246 14.5005 19.6484 14.5005H3.64844Z"
        fill="black"
      />
      <path d="M8.04834 6.45068H10.0483V8.45068H8.04834V6.45068Z" fill="black" />
      <circle cx="17.1479" cy="6.97559" r="3.99365" fill="white" />
      <circle cx="17.1479" cy="6.97559" r="3.99365" fill="url(#paint0_linear_10701_4107)" />
      <circle cx="17.1479" cy="6.97559" r="3.99365" stroke="black" />
      <circle cx="17.1479" cy="6.97559" r="3.99365" stroke="url(#paint1_linear_10701_4107)" />
      <path
        d="M19.2696 6.74367L18.5625 6.03656L17.1484 7.45062L15.7345 6.03664L15.0273 6.74374L17.1483 8.86499L19.2696 6.74367Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10701_4107"
          x1="21.5786"
          y1="11.4692"
          x2="21.5786"
          y2="2.48203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#316DF7" />
          <stop offset="1" stopColor="#569AFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_10701_4107"
          x1="21.5786"
          y1="11.4692"
          x2="21.5786"
          y2="2.48203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#316DF7" />
          <stop offset="1" stopColor="#569AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

Iconfeaturecontrolledstatic.displayName = 'Iconfeaturecontrolledstatic';

export default Iconfeaturecontrolledstatic;
