import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * property_fill
 * @source figma
 */
const Iconpropertyfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.0015 2.07728C12.3827 1.72001 11.6203 1.72001 11.0015 2.07728L3.9082 6.17257C3.2894 6.52984 2.9082 7.19009 2.9082 7.90463V16.0952C2.9082 16.8098 3.2894 17.47 3.9082 17.8273L11.0015 21.9226C11.6203 22.2798 12.3827 22.2798 13.0015 21.9226L20.0947 17.8273C20.7135 17.47 21.0947 16.8098 21.0947 16.0952V7.90463C21.0947 7.19009 20.7135 6.52984 20.0947 6.17257L13.0015 2.07728ZM8.12838 10.1513L11.6294 12.1513L12.0015 12.3639L12.3736 12.1512L15.8726 10.1512L15.1282 8.84896L12.0013 10.6363L8.87243 8.84887L8.12838 10.1513Z"
        fill={color}
      />
    </svg>
  );
});

Iconpropertyfill.displayName = 'Iconpropertyfill';

export default Iconpropertyfill;
