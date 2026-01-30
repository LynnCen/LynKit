import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * anchorpoint_closed_angle
 * @source figma
 */
const Iconanchorpointclosedangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.7423 11.0682C14.3377 11.3796 13.8787 11.6237 13.3819 11.7838L19.9286 19.4857C20.1968 19.8013 20.6701 19.8397 20.9858 19.5715C21.3014 19.3032 21.3397 18.8299 21.0715 18.5143L14.7423 11.0682Z"
        fill={color}
      />
      <path
        d="M10.6181 11.7838C10.1213 11.6237 9.66231 11.3796 9.25773 11.0682L2.92856 18.5143C2.6603 18.8299 2.69867 19.3032 3.01428 19.5715C3.32988 19.8397 3.8032 19.8013 4.07147 19.4857L10.6181 11.7838Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7.5C15 9.15685 13.6569 10.5 12 10.5C10.3432 10.5 9.00001 9.15685 9.00001 7.5C9.00001 5.84315 10.3432 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z"
        fill={color}
      />
    </svg>
  );
});

Iconanchorpointclosedangle.displayName = 'Iconanchorpointclosedangle';

export default Iconanchorpointclosedangle;
