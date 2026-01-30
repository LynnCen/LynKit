import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_share_fill
 * @source figma
 */
const Iconhbsharefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.3265 4.94102C12.3265 4.17044 13.2324 3.75735 13.8142 4.26257L20.3151 9.90868C20.7276 10.267 20.7276 10.9073 20.3151 11.2656L13.8142 16.9117C13.2324 17.4166 12.3266 17.0036 12.3265 16.2332V13.4097C8.85206 13.4418 5.58449 15.7792 4.5564 18.9198C4.44419 19.2618 4.03521 19.3605 3.87268 19.0392C3.49141 18.2854 3.19337 17.1964 3.19336 16.2859C3.19336 11.5922 7.63527 7.6971 12.3265 7.65743V4.94102Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbsharefill.displayName = 'Iconhbsharefill';

export default Iconhbsharefill;
