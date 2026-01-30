import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * gaoding_fill
 * @source figma
 */
const Icongaodingfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.2409 2.99988V4.33299H9.31261V3.44927L3.04217 4.34505V6.13661L5.7295 5.75055V8.37454H3.04217V10.1661H5.28011L2.59277 18.6775H4.38433L5.7295 14.4218V20.9184H7.52106V10.1661H9.31261V8.37454H7.52106V5.4972L9.31261 5.24083V6.13661H21.4071V4.33299H16.4788V2.99988H14.2409ZM18.7198 10.1662V8.82406V7.92829V7.03251H12V8.37467V8.82406V10.1662H13.7916V8.82406H16.9283V10.1662H18.7198ZM9.22822 11.5927V11.1434H21.3227V12.4885V12.9349V20.9999H19.5312V12.9349H11.0198V20.9999H9.22822V12.9349V11.5927ZM13.7916 13.7522H12V17.3353H13.7916V13.7522ZM16.8963 17.0524C16.9189 16.9957 16.9297 16.9349 16.928 16.8739V13.7522H18.7196V17.3353C18.7196 17.8105 18.5308 18.2662 18.1948 18.6022C17.8589 18.9381 17.4032 19.1269 16.928 19.1269H13.7973V17.3353H16.4666C16.5276 17.337 16.5884 17.3262 16.6451 17.3036C16.7018 17.281 16.7534 17.2471 16.7966 17.2039C16.8398 17.1607 16.8737 17.1092 16.8963 17.0524Z"
        fill="black"
      />
    </svg>
  );
});

Icongaodingfill.displayName = 'Icongaodingfill';

export default Icongaodingfill;
