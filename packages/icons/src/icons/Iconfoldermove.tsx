import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * folder_move
 * @source figma
 */
const Iconfoldermove = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.9991 4.25012C8.70025 4.2434 9.3737 4.51374 9.8802 4.99967L10.9976 6.07166C11.2219 6.28686 11.5143 6.40374 11.8147 6.40374H19.0228C19.9933 6.40374 20.75 7.20425 20.75 8.15427V13.1108L20.74 13.1066L19.25 11.8993V8.15427C19.25 7.99914 19.1317 7.90374 19.0228 7.90374H11.8147C11.7675 7.90374 11.7205 7.90249 11.6737 7.9H4.75V17.9995C4.75 18.1546 4.8683 18.25 4.97722 18.25H9.75606C9.95361 18.8089 10.2585 19.3172 10.6458 19.75H4.97722C4.00673 19.75 3.25 18.9495 3.25 17.9995V6.02972C3.25 5.08592 3.99704 4.28852 4.96087 4.27927L7.9991 4.25012Z"
        fill={color}
      />
      <path
        d="M18.6068 14.0589L17.3937 14.9411L18.5274 16.5H11.8149V18H18.5273L17.3935 19.5588L18.6065 20.4412L20.9276 17.25L18.6068 14.0589Z"
        fill={color}
      />
    </svg>
  );
});

Iconfoldermove.displayName = 'Iconfoldermove';

export default Iconfoldermove;
