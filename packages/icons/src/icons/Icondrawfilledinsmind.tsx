import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * draw_filled_insmind
 * @source figma
 */
const Icondrawfilledinsmind = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.8721 0.596558C7.4794 0.596617 3.91797 4.15798 3.91797 8.55066C3.91806 10.618 4.70942 12.499 6.00293 13.913C5.93889 13.9427 5.87476 13.9747 5.8125 14.0106C4.6814 14.6641 4.29 16.1094 4.9375 17.244L7.375 21.5135C8.04235 22.6826 9.28577 23.404 10.6318 23.4042H16.333C18.4039 23.404 20.083 21.7252 20.083 19.6542V16.0389C20.083 14.7687 19.4517 13.646 18.4854 12.9677C19.3313 11.7041 19.8261 10.1854 19.8262 8.55066C19.8262 4.15794 16.2648 0.596558 11.8721 0.596558ZM11.5869 7.40125C12.1615 7.40145 12.627 7.86763 12.627 8.44226V13.0389C12.6271 13.4528 12.9632 13.7885 13.377 13.7889H16.333C17.5755 13.7891 18.583 14.7964 18.583 16.0389V19.6542C18.583 20.8967 17.5755 21.904 16.333 21.9042H10.6318C9.82425 21.904 9.0781 21.4708 8.67773 20.7694L6.24023 16.4999C6.00227 16.0823 6.1464 15.55 6.5625 15.3094C6.96481 15.0772 7.47887 15.2006 7.73242 15.5897L9.16699 17.7958C9.34788 18.074 9.69061 18.2003 10.0088 18.1063C10.3271 18.0119 10.5457 17.7195 10.5459 17.3876V8.44226C10.5459 7.86767 11.0124 7.40151 11.5869 7.40125Z"
        fill={color}
      />
    </svg>
  );
});

Icondrawfilledinsmind.displayName = 'Icondrawfilledinsmind';

export default Icondrawfilledinsmind;
