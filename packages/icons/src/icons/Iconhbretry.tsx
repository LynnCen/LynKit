import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_retry
 * @source figma
 */
const Iconhbretry = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0605 2.5C14.8224 2.50008 17.3083 3.67988 19.043 5.55957L21.0293 3.56836V9.55664H15.0605L17.6289 6.97852C16.2552 5.45604 14.2701 4.50008 12.0605 4.5C7.91841 4.5 4.56055 7.85786 4.56055 12C4.56055 16.1421 7.91841 19.5 12.0605 19.5C15.0078 19.4999 17.5597 17.7997 18.7861 15.3223C19.0311 14.8275 19.6311 14.6253 20.126 14.8701C20.6207 15.1152 20.824 15.7151 20.5791 16.21C19.0283 19.3425 15.7971 21.4999 12.0605 21.5C6.81384 21.5 2.56055 17.2467 2.56055 12C2.56055 6.75329 6.81384 2.5 12.0605 2.5Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbretry.displayName = 'Iconhbretry';

export default Iconhbretry;
