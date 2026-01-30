import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * property_line
 * @source figma
 */
const Iconpropertyline = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.2515 3.37631L19.3447 7.47161C19.4994 7.56093 19.5947 7.72599 19.5947 7.90463V16.0952C19.5947 16.2739 19.4994 16.4389 19.3447 16.5282L12.2515 20.6235C12.0968 20.7129 11.9062 20.7129 11.7515 20.6235L4.6582 16.5282C4.5035 16.4389 4.4082 16.2739 4.4082 16.0952V7.90463C4.4082 7.72599 4.5035 7.56093 4.6582 7.47161L11.7515 3.37631C11.9062 3.287 12.0968 3.287 12.2515 3.37631ZM11.0015 2.07728C11.6203 1.72001 12.3827 1.72001 13.0015 2.07728L20.0947 6.17257C20.7135 6.52984 21.0947 7.19009 21.0947 7.90463V16.0952C21.0947 16.8098 20.7135 17.47 20.0947 17.8273L13.0015 21.9226C12.3827 22.2798 11.6203 22.2798 11.0015 21.9226L3.9082 17.8273C3.2894 17.47 2.9082 16.8098 2.9082 16.0952V7.90463C2.9082 7.19009 3.2894 6.52984 3.9082 6.17257L11.0015 2.07728ZM8.12838 10.1513L11.6294 12.1513L12.0015 12.3639L12.3736 12.1512L15.8726 10.1512L15.1282 8.84896L12.0013 10.6363L8.87243 8.84887L8.12838 10.1513Z"
        fill={color}
      />
    </svg>
  );
});

Iconpropertyline.displayName = 'Iconpropertyline';

export default Iconpropertyline;
