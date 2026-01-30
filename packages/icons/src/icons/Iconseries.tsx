import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * series
 * @source figma
 */
const Iconseries = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.2041 10.0107C13.2128 10.113 14 10.9643 14 12V19L13.9893 19.2041C13.8938 20.1457 13.1457 20.8938 12.2041 20.9893L12 21H5C3.96435 21 3.113 20.2128 3.01074 19.2041L3 19V12C3 10.8954 3.89543 10 5 10H12L12.2041 10.0107ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12V19C4.5 19.2761 4.72386 19.5 5 19.5H12C12.2761 19.5 12.5 19.2761 12.5 19V12C12.5 11.7239 12.2761 11.5 12 11.5H5Z"
        fill="black"
      />
      <path
        d="M16.2041 6.01074C17.2128 6.113 18 6.96435 18 8V15L17.9893 15.2041C17.8938 16.1457 17.1457 16.8938 16.2041 16.9893L16 17H15V15.5H16C16.2761 15.5 16.5 15.2761 16.5 15V8C16.5 7.72386 16.2761 7.5 16 7.5H9C8.72386 7.5 8.5 7.72386 8.5 8V9H7V8C7 6.89543 7.89543 6 9 6H16L16.2041 6.01074Z"
        fill="black"
      />
      <path
        d="M20.2041 2.01074C21.2128 2.113 22 2.96435 22 4V11L21.9893 11.2041C21.8938 12.1457 21.1457 12.8938 20.2041 12.9893L20 13H19V11.5H20C20.2761 11.5 20.5 11.2761 20.5 11V4C20.5 3.72386 20.2761 3.5 20 3.5H13C12.7239 3.5 12.5 3.72386 12.5 4V5H11V4C11 2.89543 11.8954 2 13 2H20L20.2041 2.01074Z"
        fill="black"
      />
    </svg>
  );
});

Iconseries.displayName = 'Iconseries';

export default Iconseries;
