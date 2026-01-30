import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * clear_fill_static
 * @source figma
 */
const Iconclearfillstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <circle cx="12" cy="12" r="10" fill="#7F8792" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 13.4142L14.293 15.7071L15.7072 14.2928L13.4143 12L15.7072 9.70706L14.293 8.29285L12.0001 10.5857L9.70718 8.29285L8.29297 9.70706L10.5859 12L8.29297 14.2928L9.70718 15.7071L12.0001 13.4142Z"
        fill="white"
      />
      <circle cx="12" cy="12" r="10" fill="#7F8792" />
      <path
        d="M12.0001 13.4142L14.293 15.7071L15.7072 14.2928L13.4143 12L15.7072 9.70706L14.293 8.29285L12.0001 10.5857L9.70718 8.29285L8.29297 9.70706L10.5859 12L8.29297 14.2928L9.70718 15.7071L12.0001 13.4142Z"
        fill="white"
      />
    </svg>
  );
});

Iconclearfillstatic.displayName = 'Iconclearfillstatic';

export default Iconclearfillstatic;
