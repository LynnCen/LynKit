import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * definition
 * @source figma
 */
const Icondefinition = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.4375 11.2259L20.7949 19.1828C20.8731 19.3256 20.7697 19.5 20.6069 19.5H3.39347C3.23066 19.5 3.12732 19.3256 3.20553 19.1828L4.77388 16.3188L16.4375 11.2259ZM15.7142 9.90496L12.1881 3.46616C12.1068 3.31768 11.8936 3.31768 11.8122 3.46616L5.95189 14.1677L15.7142 9.90496ZM10.4966 2.74569C11.1471 1.55783 12.8533 1.55783 13.5038 2.74569L22.1105 18.4623C22.7361 19.6047 21.9094 21 20.6069 21H3.39347C2.09097 21 1.26427 19.6047 1.88988 18.4623L10.4966 2.74569Z"
        fill={color}
      />
    </svg>
  );
});

Icondefinition.displayName = 'Icondefinition';

export default Icondefinition;
