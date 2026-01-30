import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * higher_up
 * @source figma
 */
const Iconhigherup = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.25 5.86048L11.25 18C11.25 19.5188 12.4812 20.75 14 20.75L19.501 20.75L19.501 19.25L14 19.25C13.3096 19.25 12.75 18.6904 12.75 18L12.75 5.85963L18.4725 11.5326L19.5285 10.4674L12.5285 3.52792L12.0006 3.0045L11.4725 3.52788L4.47156 10.4673L5.52753 11.5327L11.25 5.86048Z"
        fill={color}
      />
    </svg>
  );
});

Iconhigherup.displayName = 'Iconhigherup';

export default Iconhigherup;
