import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * feedback
 * @source figma
 */
const Iconfeedback = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.58789 5.03674C2.58789 3.93217 3.48332 3.03674 4.58789 3.03674H19.4114C20.516 3.03674 21.4114 3.93217 21.4114 5.03674V16.8058C21.4114 17.9104 20.516 18.8058 19.4114 18.8058H16.0967C15.0449 18.8183 14.0436 19.8043 13.2974 20.8037C12.7625 21.52 12.4951 21.8781 12.3194 21.9454C12.1268 22.0193 12.0338 22.0184 11.8426 21.941C11.6683 21.8704 11.3991 21.4956 10.8608 20.7461C10.1575 19.7668 9.15506 18.8181 7.90616 18.8058H4.58789C3.48332 18.8058 2.58789 17.9104 2.58789 16.8058V5.03674ZM6.79325 10.8036C6.50273 10.5083 6.02787 10.5045 5.73262 10.795C5.43737 11.0855 5.43354 11.5604 5.72405 11.8556C7.25966 13.4162 9.51136 14.385 11.9993 14.385C14.4872 14.385 16.7389 13.4162 18.2745 11.8556C18.565 11.5604 18.5611 11.0855 18.2659 10.795C17.9706 10.5045 17.4958 10.5083 17.2053 10.8036C15.9628 12.0663 14.1013 12.885 11.9993 12.885C9.89722 12.885 8.03575 12.0663 6.79325 10.8036Z"
        fill={color}
      />
    </svg>
  );
});

Iconfeedback.displayName = 'Iconfeedback';

export default Iconfeedback;
