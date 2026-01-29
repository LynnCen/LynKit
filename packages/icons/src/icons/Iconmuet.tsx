import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * muet
 * @source figma
 */
const Iconmuet = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M8.47524 16.999L15.5002 21.2525L16.2413 21.7011C16.3194 21.7484 16.4089 21.7734 16.5002 21.7734C16.7764 21.7734 17.0002 21.5496 17.0002 21.2734V17.477L15.5002 16.3232V19.4989L8.89377 15.4989L5.50024 15.4998V8.63086L4.10367 7.55658C4.03746 7.6902 4.00024 7.84074 4.00024 7.99998V16C4.00024 16.5523 4.44796 17 5.00024 17L8.47524 16.999ZM17.0002 2.88307V13.0613L15.5002 11.9075V4.64911L10.1988 7.82943L8.92119 6.84665L16.243 2.45432C16.4798 2.31225 16.7869 2.38903 16.929 2.62582C16.9756 2.70353 17.0002 2.79245 17.0002 2.88307ZM2.54297 5.09451L22.043 20.0945L22.9575 18.9056L3.45753 3.90558L2.54297 5.09451Z"
        fill={color}
      />
    </svg>
  );
});

Iconmuet.displayName = 'Iconmuet';

export default Iconmuet;
