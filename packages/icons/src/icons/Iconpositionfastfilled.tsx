import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * position_fast_filled
 * @source figma
 */
const Iconpositionfastfilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.25 1.99609H12.75V4.03469C12.5031 4.01174 12.2529 4 12 4C11.7471 4 11.4969 4.01174 11.25 4.03469V1.99609Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 4.03469C7.43097 4.38978 4.39087 7.42928 4.03488 11.248H1.99805V12.748H4.03451C4.3888 16.5686 7.42967 19.6101 11.25 19.9653V22H12.75V19.9653C12.7498 19.9653 12.7502 19.9653 12.75 19.9653C16.5703 19.6101 19.6118 16.5686 19.9661 12.748H22.002V11.248H19.9651C19.9651 11.248 19.9651 11.2481 19.9651 11.248C19.6091 7.42929 16.569 4.38978 12.75 4.03469C12.7498 4.03467 12.7502 4.03471 12.75 4.03469V8.99997H11.2506L11.25 4.03469C11.2502 4.03467 11.2498 4.03471 11.25 4.03469ZM9.00195 12.748V11.248H4.03488C4.0118 11.4956 4 11.7464 4 12C4 12.2522 4.01167 12.5018 4.03451 12.748C4.03451 12.748 4.03451 12.7481 4.03451 12.748L9.00195 12.748ZM11.25 19.9653C11.4969 19.9883 11.7471 20 12 20C12.2529 20 12.5031 19.9883 12.75 19.9653V14.9961H11.2506L11.25 19.9653C11.2502 19.9653 11.2498 19.9653 11.25 19.9653ZM14.9987 11.248H19.9651C19.9882 11.4956 20 11.7464 20 12C20 12.2522 19.989 12.5018 19.9661 12.748L14.9987 12.748V11.248Z"
        fill={color}
      />
    </svg>
  );
});

Iconpositionfastfilled.displayName = 'Iconpositionfastfilled';

export default Iconpositionfastfilled;
