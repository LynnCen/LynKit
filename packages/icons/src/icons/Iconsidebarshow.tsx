import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * sidebar_show
 * @source figma
 */
const Iconsidebarshow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M8.70984 14.3463L9.75598 13.3001L5.59888 13.3001L5.59888 11.8016L9.70076 11.8016L8.70985 10.8107L9.77051 9.75L12.5989 12.5785L9.7705 15.4069L8.70984 14.3463Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 17.25C21.5 18.7688 20.2688 20 18.75 20L4.75 20C3.23122 20 2 18.7688 2 17.25L2 7.75C2 6.23121 3.23122 5 4.75 5L18.75 5C20.2688 5 21.5 6.23122 21.5 7.75L21.5 17.25ZM18.75 18.5C19.4404 18.5 20 17.9404 20 17.25L20 7.75C20 7.05964 19.4404 6.5 18.75 6.5L15.75 6.5L15.75 18.5L18.75 18.5ZM4.75 6.5L14.25 6.5L14.25 18.5L4.75 18.5C4.05964 18.5 3.5 17.9404 3.5 17.25L3.5 7.75C3.5 7.05964 4.05965 6.5 4.75 6.5Z"
        fill="black"
      />
    </svg>
  );
});

Iconsidebarshow.displayName = 'Iconsidebarshow';

export default Iconsidebarshow;
