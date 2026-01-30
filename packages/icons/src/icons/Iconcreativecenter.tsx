import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * creative_center
 * @source figma
 */
const Iconcreativecenter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.25 3H12.75V7L12 7.75L11.25 7V3ZM11.25 21V17L12 16.25L12.75 17V21H11.25ZM3 11.25V12.75H7L7.75 12L7 11.25H3ZM21 11.25H17L16.25 12L17 12.75H21V11.25ZM17.1253 5.81223L17.6383 6.32531C17.6446 6.33114 17.6507 6.33709 17.6568 6.34317C17.6629 6.34925 17.6688 6.35541 17.6747 6.36164L18.1859 6.87289L17.6873 7.37148C17.6775 7.38249 17.6674 7.39328 17.6568 7.40383L13.7678 11.2929C13.3773 11.6834 13.3773 12.3166 13.7678 12.7071L17.6569 16.5962C17.6663 16.6056 17.6754 16.6152 17.6843 16.625L18.1864 17.1271L17.6683 17.6452L17.6569 17.6568L17.6452 17.6682L17.1257 18.1878L12.6739 13.736C12.2815 13.3775 11.6725 13.3881 11.2929 13.7677L7.40381 17.6568C7.39326 17.6674 7.38247 17.6776 7.37147 17.6873L6.87238 18.1864L5.81172 17.1258L10.2676 12.6699C10.6122 12.2886 10.611 11.7059 10.264 11.3261L5.8113 6.87338L6.34227 6.34241L6.34236 6.34232L6.87196 5.81272L7.37417 6.31493C7.38397 6.32376 7.39359 6.33289 7.40302 6.34232L11.2929 10.2322C11.6713 10.6105 12.2773 10.6223 12.6699 10.2676L17.1253 5.81223Z"
        fill={color}
      />
    </svg>
  );
});

Iconcreativecenter.displayName = 'Iconcreativecenter';

export default Iconcreativecenter;
