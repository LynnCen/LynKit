import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * pic_group
 * @source figma
 */
const Iconpicgroup = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3.25 5C3.25 4.0335 4.0335 3.25 5 3.25H10C10.9665 3.25 11.75 4.0335 11.75 5V19C11.75 19.9665 10.9665 20.75 10 20.75H5C4.0335 20.75 3.25 19.9665 3.25 19V5ZM5 4.75C4.86193 4.75 4.75 4.86193 4.75 5V19C4.75 19.1381 4.86193 19.25 5 19.25H10C10.1381 19.25 10.25 19.1381 10.25 19V5C10.25 4.86193 10.1381 4.75 10 4.75H5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.25 5C13.25 4.0335 14.0335 3.25 15 3.25H19.5C20.4665 3.25 21.25 4.0335 21.25 5V9.5C21.25 10.4665 20.4665 11.25 19.5 11.25H15C14.0335 11.25 13.25 10.4665 13.25 9.5V5ZM15 4.75C14.8619 4.75 14.75 4.86193 14.75 5V9.5C14.75 9.63807 14.8619 9.75 15 9.75H19.5C19.6381 9.75 19.75 9.63807 19.75 9.5V5C19.75 4.86193 19.6381 4.75 19.5 4.75H15Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 12.75C14.0335 12.75 13.25 13.5335 13.25 14.5V19C13.25 19.9665 14.0335 20.75 15 20.75H19.5C20.4665 20.75 21.25 19.9665 21.25 19V14.5C21.25 13.5335 20.4665 12.75 19.5 12.75H15ZM14.75 14.5C14.75 14.3619 14.8619 14.25 15 14.25H19.5C19.6381 14.25 19.75 14.3619 19.75 14.5V19C19.75 19.1381 19.6381 19.25 19.5 19.25H15C14.8619 19.25 14.75 19.1381 14.75 19V14.5Z"
        fill="black"
      />
    </svg>
  );
});

Iconpicgroup.displayName = 'Iconpicgroup';

export default Iconpicgroup;
