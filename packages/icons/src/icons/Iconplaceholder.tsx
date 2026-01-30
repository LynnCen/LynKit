import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * placeholder
 * @source figma
 */
const Iconplaceholder = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9 4.75H6C5.30964 4.75 4.75 5.30964 4.75 6V9H3.25V6C3.25 4.48122 4.48122 3.25 6 3.25H9V4.75Z"
        fill="black"
      />
      <path
        d="M4.75 18V15H3.25V18C3.25 19.5188 4.48122 20.75 6 20.75H9V19.25H6C5.30964 19.25 4.75 18.6904 4.75 18Z"
        fill="black"
      />
      <path
        d="M18 19.25H15V20.75H18C19.5188 20.75 20.75 19.5188 20.75 18V15H19.25V18C19.25 18.6904 18.6904 19.25 18 19.25Z"
        fill="black"
      />
      <path
        d="M18 4.75H15V3.25H18C19.5188 3.25 20.75 4.48122 20.75 6V9H19.25V6C19.25 5.30964 18.6904 4.75 18 4.75Z"
        fill="black"
      />
      <path
        d="M10.5301 9.46943L9.46943 10.5301L6.46973 7.53039L7.53039 6.46973L10.5301 9.46943Z"
        fill="black"
      />
      <path
        d="M9.46948 13.47L10.5301 14.5306L7.53039 17.5304L6.46973 16.4697L9.46948 13.47Z"
        fill="black"
      />
      <path
        d="M13.4697 14.5304L14.5304 13.4697L17.5304 16.4697L16.4697 17.5304L13.4697 14.5304Z"
        fill="black"
      />
      <path
        d="M17.5304 7.53039L14.5304 10.5303L13.4698 9.46967L16.4697 6.46973L17.5304 7.53039Z"
        fill="black"
      />
    </svg>
  );
});

Iconplaceholder.displayName = 'Iconplaceholder';

export default Iconplaceholder;
