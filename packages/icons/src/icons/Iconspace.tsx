import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * space
 * @source figma
 */
const Iconspace = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.7669 10.0749C18.9051 6.5865 15.7546 4 12 4C7.93792 4 4.58295 7.02749 4.0684 10.9492C2.81513 11.8577 2 13.3337 2 15C2 17.7614 4.23858 20 7 20H16.5C19.5376 20 22 17.5376 22 14.5C22 12.6858 21.1216 11.0767 19.7669 10.0749ZM5.47164 11.7846L4.94882 12.1636C4.068 12.8022 3.5 13.8347 3.5 15C3.5 16.811 4.87551 18.3008 6.63881 18.4816L12.0616 11.2512C13.0624 9.88624 14.6777 9 16.5 9C16.9665 9 17.4194 9.05808 17.852 9.1674C16.7993 6.99668 14.5744 5.5 12 5.5C8.70075 5.5 5.97353 7.95944 5.55565 11.1443L5.47164 11.7846ZM18.4222 10.9913C18.4227 10.9942 18.4231 10.9971 18.4236 11H18.438C19.6677 11.6824 20.5 12.994 20.5 14.5C20.5 16.7091 18.7091 18.5 16.5 18.5H8.5L13.2665 12.1447L13.2713 12.1382C14.0017 11.142 15.1758 10.5 16.5 10.5C17.1967 10.5 17.8518 10.6781 18.4222 10.9913Z"
        fill={color}
      />
    </svg>
  );
});

Iconspace.displayName = 'Iconspace';

export default Iconspace;
