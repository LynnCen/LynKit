import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_text_replace
 * @source figma
 */
const Iconaitextreplace = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M22.8713 17.0014C22.8712 18.0645 22.0091 18.9265 20.946 18.9267H18.9748V20.2888L15.4702 18.2849L18.9748 16.2803V17.6432H20.946C21.3002 17.643 21.5877 17.3556 21.5878 17.0014V15.3477H22.8713V17.0014Z"
        fill={color}
      />
      <path
        d="M22.8997 13.0398L19.3734 15.0478V13.6815H17.4247C17.0703 13.6815 16.783 13.9688 16.783 14.3233V15.977H15.4995V14.3233C15.4995 13.26 16.3614 12.398 17.4247 12.398H19.3734V11.0309L22.8997 13.0398Z"
        fill={color}
      />
      <path d="M22 5.78094H2V4.28094H22V5.78094Z" fill="black" />
      <path d="M22 9.78094H2V8.28094H22V9.78094Z" fill="black" />
      <path d="M2 13.7809H14V12.2809H2V13.7809Z" fill="black" />
      <path d="M2 17.7809H12V16.2809H2V17.7809Z" fill="black" />
    </svg>
  );
});

Iconaitextreplace.displayName = 'Iconaitextreplace';

export default Iconaitextreplace;
